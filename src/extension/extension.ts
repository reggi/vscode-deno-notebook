// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { SampleContentSerializer, SampleKernel } from './sampleProvider';

// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  
  context.subscriptions.push(
    vscode.workspace.registerNotebookSerializer(
      'test-notebook-renderer', new SampleContentSerializer(), { transientOutputs: true }
    ),
    new SampleKernel(context),

    // vscode.workspace.onDidSaveTextDocument(e => {
    //   vscode.window.showInformationMessage('did' + e.fileName)
      
    // }),

    // vscode.workspace.onWillSaveTextDocument(e => {
    //     vscode.window.showInformationMessage('will' + e.document.fileName)
    // }),
    // vscode.commands.registerCommand('extension.format-foo', () => {
    //   const { activeTextEditor } = vscode.window;
    
    //   activeTextEditor?.document.uri

    //   if (activeTextEditor && activeTextEditor.document.languageId === 'foo-lang') {
    //     const { document } = activeTextEditor;
    //     const firstLine = document.lineAt(0);
    
    //     if (firstLine.text !== '42') {
    //       const edit = new vscode.WorkspaceEdit();
    //       edit.insert(document.uri, firstLine.range.start, '42\n');
    
    //       return vscode.workspace.applyEdit(edit);
    //     }
    //   }
    // })

    // vscode.languages.registerDocumentFormattingEditProvider('test-notebook-renderer', {
    //   provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
    //     vscode.window.showInformationMessage(document.fileName)
    //     return []
    //   }
    // })
  );

}

// This method is called when your extension is deactivated
export function deactivate() { }
