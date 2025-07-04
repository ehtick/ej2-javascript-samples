this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({
        serviceUrl:hostUrl, enableToolbar: true, toolbarMode: 'Ribbon', height: '590px', showPropertiesPane: false,
        enableTrackChanges: true, userColor: '#b70f34',documentEditorSettings: { showRuler: true }
    });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"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"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Track Changes';    
    // TitleBar sample starts
    var switchObj = new ejs.buttons.Switch({ checked: true, cssClass: 'buttonSwitch' });
    switchObj.appendTo('#toolbarSwitch');

    switchObj.change = function (args) {
        if (args.checked) {
            container.toolbarMode = 'Ribbon';
        }
        else {
            container.toolbarMode = 'Toolbar';
        }
        showButtons(container.toolbarMode !== 'Ribbon');
    };
titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true); 
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
     var documentTitle;
     var documentTitleContentEditor;
     var titleBarDiv;
     var print;
     var openBtn;
     var download;
     var isPropertiesPaneEnabled;
     function initializeTitleBar(isShareNeeded) {
         documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
         documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
         documentTitleContentEditor.appendChild(documentTitle);
         titleBarDiv.appendChild(documentTitleContentEditor);
         documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
         var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
             'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
         print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
         openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
         var items = [
            { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
            { text: 'Word Document (*.docx)', id: 'word' },
            { text: 'Word Template (*.dotx)', id: 'dotx'},
            { text: 'Plain Text (*.txt)', id: 'txt'},
        ];
         download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
         if (!isShareNeeded) {
             download.element.style.display = 'none';
         }
         else {
             openBtn.element.style.display = 'none';
         }
     }
     function wireEventsInTitleBar() {
         print.element.addEventListener('click', onPrint);
         openBtn.element.addEventListener('click', function (e) {
             if (e.target.id === 'de-open') {
                 var fileUpload = document.getElementById('uploadfileButton');
                 fileUpload.value = '';
                 fileUpload.click();
             }
         });
         documentTitleContentEditor.addEventListener('keydown', function (e) {
             if (e.keyCode === 13) {
                 e.preventDefault();
                 documentTitleContentEditor.contentEditable = 'false';
                 if (documentTitleContentEditor.textContent === '') {
                     documentTitleContentEditor.textContent = 'Document1';
                 }
             }
         });
         documentTitleContentEditor.addEventListener('blur', function () {
             if (documentTitleContentEditor.textContent === '') {
                 documentTitleContentEditor.textContent = 'Document1';
             }
             documentTitleContentEditor.contentEditable = 'false';
             container.documentEditor.documentName = documentTitle.textContent;
         });
         documentTitleContentEditor.addEventListener('click', function () {
             updateDocumentEditorTitle();
         });
     }
     function updateDocumentEditorTitle() {
         documentTitleContentEditor.contentEditable = 'true';
         documentTitleContentEditor.focus();
         window.getSelection().selectAllChildren(documentTitleContentEditor);
     }
     function updateDocumentTitle() {
         if (container.documentEditor.documentName === '') {
             container.documentEditor.documentName = 'Untitled';
         }
         documentTitle.textContent = container.documentEditor.documentName;
     }
     function onPrint() {
         container.documentEditor.print();
     }
     function onExportClick(args) {
         var value = args.item.id;
         switch (value) {
             case 'word':
                 save('Docx');
                 break;
             case 'sfdt':
                 save('Sfdt');
                 break;
            case 'txt':
                save('Txt');
                break;
            case 'dotx':
                save('Dotx');
                break;
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
    }
     function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
         var button = ej.base.createElement('button', { id: id, styles: styles });
         titleBarDiv.appendChild(button);
         button.setAttribute('title', tooltipText);
         if (isDropDown) {
             var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
             return dropButton;
         }
         else {
             var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
             return ejButton;
         }
     } 
      function showButtons(show) {
        var displayStyle = show ? 'block' : 'none';

        if (print) {
            print.element.style.display = displayStyle;
        }
        if (download) {
            download.element.style.display = displayStyle;
        }
    }

    showButtons(false); 
};