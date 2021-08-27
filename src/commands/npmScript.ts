import path = require("path");
import * as vscode from "vscode";
import * as fs from "fs";

const commandEntitys = {
  runScript: "extension.runScript",
};

function getPackageJsonScripts(rootPath: string) {
  const p = path.join(rootPath, "package.json");
  try {
    const file = fs.readFileSync(p, "utf-8");
    return JSON.parse(file).scripts;
  } catch (error) {
    return {};
  }
}

function createTerminal(execute: string) {
  const terminal = vscode.window.createTerminal("run scripts");
  terminal.sendText(execute, true);
  terminal.show();
}

export default function (context: vscode.ExtensionContext) {
  const command1 = vscode.commands.registerCommand(
    commandEntitys.runScript,
    () => {
      let scripts: any = {};
      if (vscode.workspace.rootPath) {
        scripts = getPackageJsonScripts(vscode.workspace.rootPath);
      }
      const scriptNames = Object.keys(scripts);
      if (scriptNames.length === 0) {
        return vscode.window.showInformationMessage(
          "未找到package.json 或者 package.json 中未提供 script 字段"
        );
      }
      // 创建 Pick
      const pick = vscode.window.createQuickPick();
      pick.items = scriptNames.map((name) => {
        return { label: name, description: scripts[name] as string };
      });
      pick.onDidChangeSelection((selections) => {
        if (selections.length > 0) {
          const command = "npm run " + selections[0].label;
          createTerminal(command);
          pick.hide();
        }
      });
      pick.show();
      pick.onDidHide(() => {
        pick.dispose();
      });
    }
  );

  const button = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    100
  );
  button.text = "FHelper Run Script";
  button.command = commandEntitys.runScript;
  button.show();
  context.subscriptions.push(button);
  context.subscriptions.push(command1);
}
