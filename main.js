/*
 * Forked from John Barry's https://github.com/Genoux/New-Html
 */

define(function (require, exports, module) {
  "use strict";
  
  var commandNameHtml5    = "newHtml5";
  var commandNameNodeJs   = "newNodeJs";

  var Menus               = brackets.getModule("command/Menus"),
      CommandManager      = brackets.getModule("command/CommandManager"),
      EditorManager       = brackets.getModule("editor/EditorManager");

  /*
   * Implementation
   */
  function loadhtml5() {
    var template = require('text!templates/html5.html');
    EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
  }
  
  function loadnodejs() {
    var template = require('text!templates/node.js');
    EditorManager.getCurrentFullEditor()._codeMirror.setValue(template);
  }
  
  /*
   * Command
   */
  CommandManager.register("New html5", commandNameHtml5, loadhtml5); 
  CommandManager.register("New node.js", commandNameNodeJs, loadnodejs); 
  
  /*
   * Custom menu
   */
  var menu = Menus.addMenu("Templates", "edgedocks.custom.menu" );  
  menu.addMenuItem(commandNameHtml5)
  menu.addMenuItem(commandNameNodeJs)

});