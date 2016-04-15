/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config )
{
    config.resize_dir = 'vertical';
    config.skin = 'kama,/vendor/assets/javascripts/ckeditor/skins/kama';
    config.toolbar =
        [
            { name: 'document', items : [ 'Source','-' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'SpellChecker' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
            { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
            { name: 'insert', items : [ 'Image','Table','HorizontalRule','SpecialChar' ] },
            { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
            { name: 'colors', items : [ 'TextColor','BGColor' ] },
            { name: 'tools', items : [ 'Maximize' ] }
        ];

    // Define changes to default configuration here. For example:
    config.language = 'en';
    // config.uiColor = '#AADC6E';
};

CKEDITOR.on('dialogDefinition', function( ev ) {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    if(dialogName === 'table') {
        var infoTab = dialogDefinition.getContents('info');
        var cellSpacing = infoTab.get('txtCellSpace');
        cellSpacing['default'] = "0";
        var cellPadding = infoTab.get('txtCellPad');
        cellPadding['default'] = "0";
        var border = infoTab.get('txtBorder');
        border['default'] = "0";
    }
});