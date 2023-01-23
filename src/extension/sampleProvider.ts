import * as vscode from 'vscode';
import { TextDecoder, TextEncoder } from "util";
import { watchFile } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';
import { spawn, exec } from 'child_process';

/**
 * An ultra-minimal sample provider that lets the user type in JSON, and then
 * outputs JSON cells. The outputs are transient and not saved to notebook file on disk.
 */

 interface RawNotebookData {
  cells: RawNotebookCell[]
}

interface RawNotebookCell {
  language: string;
  value: string;
  kind: vscode.NotebookCellKind;
  editable?: boolean;
}

export class SampleContentSerializer implements vscode.NotebookSerializer {
  public readonly label: string = 'My Sample Content Serializer';

  public async deserializeNotebook(data: Uint8Array, token: vscode.CancellationToken): Promise<vscode.NotebookData> {
    var contents = new TextDecoder().decode(data);    // convert to String to make JSON object

    // Read file contents
    let raw: RawNotebookData;
    try {
      raw = <RawNotebookData>JSON.parse(contents);
    } catch {
      raw = { cells: [] };
    }

    // Create array of Notebook cells for the VS Code API from file contents
    const cells = raw.cells.map(item => new vscode.NotebookCellData(
      item.kind,
      item.value,
      item.language
    ));

    // Pass read and formatted Notebook Data to VS Code to display Notebook with saved cells
    return new vscode.NotebookData(
      cells
    );
  }

  public async serializeNotebook(data: vscode.NotebookData, token: vscode.CancellationToken): Promise<Uint8Array> {
    // Map the Notebook data into the format we want to save the Notebook data as
    let contents: RawNotebookData = { cells: []};

    for (const cell of data.cells) {
      contents.cells.push({
        kind: cell.kind,
        language: cell.languageId,
        value: cell.value
      });
    }

    // Give a string of all the data to save and VS Code will handle the rest
    return new TextEncoder().encode(JSON.stringify(contents));
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getName (rawLines: string | string[]) {
  const lines = typeof rawLines === 'string' ? rawLines.split('\n') : rawLines;
  const nameLine = /^#!(.*)/.test(lines[0]) ? lines[1] : lines[0];
  if (!/^\/\//.test(nameLine)) {
    return;
  }
  return nameLine.replace(/#/, '').replace(/\/\//, '').trim();
}

const langToExt = (type: string) => {
  if (type === 'shellscript') {return 'sh';};
  if (type === 'json') {return 'json';};
  if (type === 'typescript') {return 'ts';};
  return "unk";
};

function cmd(...command: string[]): Promise<{code: number | null, stderr: string, hasStderr: boolean, stdout: string}> {
  let p = spawn(command[0], command.slice(1), { shell: true});
  const stdout: string[] = [];
  const stderr: string[] = [];
  return new Promise((resolve) => {
    p.stdout.on("data", (x) => {
      stdout.push(x);
    });
    p.stderr.on("data", (x) => {
      stderr.push(x);
    });
    p.on("exit", (code) => {
      resolve({
        code,
        stderr: stderr.join('\n'),
        hasStderr: stderr.length > 0,
        stdout: stdout.join('\n')
      });
    });
  });
}

export class SampleKernel {
  readonly id = 'test-notebook-renderer-kernel';
  public readonly label = 'Sample Notebook Kernel ';
  readonly supportedLanguages = ['typescript', 'json', 'shellscript', 'yaml'];

  private _executionOrder = 0;
  private readonly _controller: vscode.NotebookController;

  constructor(context: vscode.ExtensionContext) {

    // vscode.window.registerFileDecorationProvider(() => )
    // vscode.window.showInformationMessage(vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0].uri.path || '1')
    // vscode.window.showInformationMessage(vscode.window.activeTextEditor?.document.uri.path || "2")
    // vscode.window.showInformationMessage(vscode.window.activeTextEditor?.document.fileName || "3")

    this._controller = vscode.notebooks.createNotebookController(this.id,
                                                                'test-notebook-renderer',
                                                                this.label);

    this._controller.supportedLanguages = this.supportedLanguages;
    this._controller.supportsExecutionOrder = false;
    this._controller.executeHandler = this._executeAll.bind(this);

    this._controller.onDidChangeSelectedNotebooks(async e => {
      if (e.selected === false) {return;}

      const dir = path.dirname(e.notebook.uri.path);

      watchFile(e.notebook.uri.path, async () => {
        const content = await readFile(e.notebook.uri.path, { encoding: 'utf-8' });
        const data = JSON.parse(content);
        let edit = new vscode.WorkspaceEdit();
        let namelessCells: string[] = [];

        data.cells.map(async (cell: any, i: number) => {
          const ext = langToExt(cell.language);
          const name = getName(cell.value);
          
          vscode.window.showInformationMessage(name || 'wwww');

          if (!name && ext === 'ts') {
            namelessCells.push(cell);
            return;
          }
          const filePath = vscode.Uri.file(path.join(dir, `${name}.${ext}`));
          edit.createFile(filePath, { overwrite: true });
          edit.insert(filePath, new vscode.Position(0, 0), cell.value);
        });

        if (namelessCells.length > 0) {
          const filePath = vscode.Uri.file(path.join(dir, `mod.ts`));
          edit.createFile(filePath, { overwrite: true });
          const value = namelessCells.join('\n');
          edit.insert(filePath, new vscode.Position(0, 0), value);
        }
        
        await vscode.workspace.applyEdit(edit);

        vscode.window.showInformationMessage(e.notebook.uri.path);
      });

      // let edit = await new vscode.WorkspaceEdit()
      // edit.createFile(e.notebook.uri)
      vscode.window.showInformationMessage(e.notebook.uri.path);
    });

  }

  dispose(): void {
		this._controller.dispose();
	}

  private _executeAll(cells: vscode.NotebookCell[], _notebook: vscode.NotebookDocument, _controller: vscode.NotebookController): void {
		for (let cell of cells) {
			this._doExecution(cell);
		}
	}

  private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
    const execution = this._controller.createNotebookCellExecution(cell);

    execution.executionOrder = ++this._executionOrder;
    execution.start(Date.now());
    
    const dir = path.dirname(cell.notebook.uri.path);
    
    const ext = langToExt(cell.document.languageId);
    const name = getName(cell.document.getText());
    const filePath = vscode.Uri.file(path.join(dir, `${name}.${ext}`));
    vscode.window.showInformationMessage(filePath.path);
    
    await writeFile(filePath.path, cell.document.getText(), { encoding: 'utf-8' });

    try {
      const subcmd = name.endsWith('test') ? 'test' : 'run';
      const { stdout, hasStderr, stderr } = await cmd('deno', subcmd, '-A', filePath.path);
      console.log({ stdout, hasStderr, stderr });
      execution.replaceOutput([new vscode.NotebookCellOutput([
        ...(hasStderr ? [
          vscode.NotebookCellOutputItem.stderr(stderr)
        ] : [
          vscode.NotebookCellOutputItem.stdout(stdout)
        ]),
        // vscode.NotebookCellOutputItem.text(cell.document.getText(), "text/plain"),
        // vscode.NotebookCellOutputItem.json(cell.document.getText(), "x-application/sample-json-renderer"),
        // vscode.NotebookCellOutputItem.json(cell.document.getText())
      ])]);

      execution.end(true, Date.now());
    } catch (err) {
      if (err instanceof Error) {
        execution.replaceOutput([new vscode.NotebookCellOutput([
          vscode.NotebookCellOutputItem.error(err)
        ])]);
        execution.end(false, Date.now());
      }
    }
  }
}