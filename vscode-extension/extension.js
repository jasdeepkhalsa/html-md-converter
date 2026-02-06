const vscode = require('vscode');
const TurndownService = require('turndown');
const MarkdownIt = require('markdown-it');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // HTML to Markdown command
  let htmlToMdDisposable = vscode.commands.registerCommand(
    'html-md-converter.htmlToMarkdown',
    async function () {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage('No active editor found');
        return;
      }

      const selection = editor.selection;
      const text = editor.document.getText(
        selection.isEmpty ? undefined : selection
      );

      if (!text) {
        vscode.window.showErrorMessage('No content to convert');
        return;
      }

      try {
        const turndownService = new TurndownService({
          headingStyle: 'atx',
          codeBlockStyle: 'fenced'
        });

        const markdown = turndownService.turndown(text);

        // Replace the selection or entire document
        await editor.edit(editBuilder => {
          if (selection.isEmpty) {
            const firstLine = editor.document.lineAt(0);
            const lastLine = editor.document.lineAt(
              editor.document.lineCount - 1
            );
            const textRange = new vscode.Range(
              firstLine.range.start,
              lastLine.range.end
            );
            editBuilder.replace(textRange, markdown);
          } else {
            editBuilder.replace(selection, markdown);
          }
        });

        vscode.window.showInformationMessage(
          'Successfully converted HTML to Markdown'
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Conversion failed: ${error.message}`);
      }
    }
  );

  // Markdown to HTML command
  let mdToHtmlDisposable = vscode.commands.registerCommand(
    'html-md-converter.markdownToHtml',
    async function () {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage('No active editor found');
        return;
      }

      const selection = editor.selection;
      const text = editor.document.getText(
        selection.isEmpty ? undefined : selection
      );

      if (!text) {
        vscode.window.showErrorMessage('No content to convert');
        return;
      }

      try {
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          typographer: true
        });

        const html = md.render(text);

        // Replace the selection or entire document
        await editor.edit(editBuilder => {
          if (selection.isEmpty) {
            const firstLine = editor.document.lineAt(0);
            const lastLine = editor.document.lineAt(
              editor.document.lineCount - 1
            );
            const textRange = new vscode.Range(
              firstLine.range.start,
              lastLine.range.end
            );
            editBuilder.replace(textRange, html);
          } else {
            editBuilder.replace(selection, html);
          }
        });

        vscode.window.showInformationMessage(
          'Successfully converted Markdown to HTML'
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Conversion failed: ${error.message}`);
      }
    }
  );

  context.subscriptions.push(htmlToMdDisposable);
  context.subscriptions.push(mdToHtmlDisposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
