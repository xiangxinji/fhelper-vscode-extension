import * as vscode from 'vscode';
import npmScript from './commands/npmScript'

export function activate(context: vscode.ExtensionContext) {
	npmScript(context);
}

export function deactivate() {}
