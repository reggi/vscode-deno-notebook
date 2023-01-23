"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleKernel = exports.SampleContentSerializer = void 0;
const vscode = require("vscode");
const util_1 = require("util");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path = require("path");
const child_process_1 = require("child_process");
class SampleContentSerializer {
    constructor() {
        this.label = 'My Sample Content Serializer';
    }
    async deserializeNotebook(data, token) {
        var contents = new util_1.TextDecoder().decode(data); // convert to String to make JSON object
        // Read file contents
        let raw;
        try {
            raw = JSON.parse(contents);
        }
        catch {
            raw = { cells: [] };
        }
        // Create array of Notebook cells for the VS Code API from file contents
        const cells = raw.cells.map(item => new vscode.NotebookCellData(item.kind, item.value, item.language));
        // Pass read and formatted Notebook Data to VS Code to display Notebook with saved cells
        return new vscode.NotebookData(cells);
    }
    async serializeNotebook(data, token) {
        // Map the Notebook data into the format we want to save the Notebook data as
        let contents = { cells: [] };
        for (const cell of data.cells) {
            contents.cells.push({
                kind: cell.kind,
                language: cell.languageId,
                value: cell.value
            });
        }
        // Give a string of all the data to save and VS Code will handle the rest
        return new util_1.TextEncoder().encode(JSON.stringify(contents));
    }
}
exports.SampleContentSerializer = SampleContentSerializer;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getName(rawLines) {
    const lines = typeof rawLines === 'string' ? rawLines.split('\n') : rawLines;
    const nameLine = /^#!(.*)/.test(lines[0]) ? lines[1] : lines[0];
    if (nameLine) {
    }
    return nameLine.replace(/#/, '').replace(/\/\//, '').trim();
}
const langToExt = (type) => {
    if (type === 'shellscript') {
        return 'sh';
    }
    ;
    if (type === 'json') {
        return 'json';
    }
    ;
    if (type === 'typescript') {
        return 'ts';
    }
    ;
    return "unk";
};
function cmd(...command) {
    let p = child_process_1.spawn(command[0], command.slice(1), { shell: true });
    const stdout = [];
    const stderr = [];
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
class SampleKernel {
    constructor(context) {
        // vscode.window.registerFileDecorationProvider(() => )
        // vscode.window.showInformationMessage(vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0].uri.path || '1')
        // vscode.window.showInformationMessage(vscode.window.activeTextEditor?.document.uri.path || "2")
        // vscode.window.showInformationMessage(vscode.window.activeTextEditor?.document.fileName || "3")
        this.id = 'test-notebook-renderer-kernel';
        this.label = 'Sample Notebook Kernel ';
        this.supportedLanguages = ['json', 'typescript', 'shellscript', 'yaml'];
        this._executionOrder = 0;
        this._controller = vscode.notebooks.createNotebookController(this.id, 'test-notebook-renderer', this.label);
        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = false;
        this._controller.executeHandler = this._executeAll.bind(this);
        this._controller.onDidChangeSelectedNotebooks(async (e) => {
            if (e.selected === false) {
                return;
            }
            const dir = path.dirname(e.notebook.uri.path);
            fs_1.watchFile(e.notebook.uri.path, async () => {
                const content = await promises_1.readFile(e.notebook.uri.path, { encoding: 'utf-8' });
                const data = JSON.parse(content);
                let edit = new vscode.WorkspaceEdit();
                let namelessCells = [];
                data.cells.map(async (cell, i) => {
                    const ext = langToExt(cell.language);
                    const name = getName(cell.value);
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
    dispose() {
        this._controller.dispose();
    }
    _executeAll(cells, _notebook, _controller) {
        for (let cell of cells) {
            this._doExecution(cell);
        }
    }
    async _doExecution(cell) {
        const execution = this._controller.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now());
        const dir = path.dirname(cell.notebook.uri.path);
        const ext = langToExt(cell.document.languageId);
        const name = getName(cell.document.getText());
        const filePath = vscode.Uri.file(path.join(dir, `${name}.${ext}`));
        vscode.window.showInformationMessage(filePath.path);
        await promises_1.writeFile(filePath.path, cell.document.getText(), { encoding: 'utf-8' });
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
        }
        catch (err) {
            if (err instanceof Error) {
                execution.replaceOutput([new vscode.NotebookCellOutput([
                        vscode.NotebookCellOutputItem.error(err)
                    ])]);
                execution.end(false, Date.now());
            }
        }
    }
}
exports.SampleKernel = SampleKernel;
//# sourceMappingURL=sampleProvider.js.map