this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ toolbarMode: 'Ribbon',serviceUrl:hostUrl,height:'590px',documentEditorSettings: { showRuler: true } });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"UEsDBAoAAAAIAFKJbVZpOvR68w4AADOtAAAEAAAAc2ZkdO0dTW8jt/WvDKaXBFANSZbkj0uwX84m2XW2tRMgSHOgZjgS1zPDWZLjjywWKJJTLwUKpEUPDdBbD0XRAA3QoJf+mAU2aNMf0UdyZEveNzLHkmzvmruAqSE55OPj4+P70tPzkBeKZexLupfEKtxWoqStUNIo3P78eQhlIcLt52FxFG73t/pr3a2trc2Nja3u1mBzsxUW43B7s9dZ22q3291er9NrD7r9Vphm0LvXCkVVKig3uq1wWJVxUoTbbSg5tR/Gse2YQLk+gI7MVA8BinCXHj0hIxrCbKNcQsUdQYYsguc84ilUdFohfXZkynSoIvOmbfn8ixcwiFlJkehlDGMhdalg2ufQlipbipEth9Xz2BaHuoBSqhzm3Wcq1WCkLKnqo8T2Y2aKyZNKYfRwhwmpgj0aKcbz8AVAshQg9sqhagTHHmxtsNkZHHfa/UFxHLzzhAslCFPvXiNQj4kYsTzYMgApXgQkj4MhV4pn7wYbXV2b0kSZasFG42UCu8tFRlJnUB9xQbOAFbLMgpinXASSqSDUwMx2JBlVSHUL6xvxHI6WoqoUSCs6eswKJiOWjxxfoCnDwZE0hoWgr7BSZjx2nEDRrOCu4LM8YjGLy1w5vlCiHVMyhO0IKLoBZndokJFRTlAUpuxZSZCGteATdECaswyDgsRBxqANe+cQXiKZKx08K5l0REjOJfBmdHPoMRURU0RzGhSXaUqyiDtOZHCMg5Uzydw3q24LWIEvAt0C4jhyxDMgXe7cG84fEINCqeE+7AoKfamoK72LUqB9LQth6D4JWgg6pnlMBXp2a1475GlZwO67wnZYwxpQ/EvpOmzE0rTMatdM0eFLx8GTcsSIK9C5JnjHvgURMDDKhtew/g+OI1oo6sy3JXNmeTyKCI2cVxmVBYuJwvvnOCcoBGcxzWsuBuDOmsSiMi1IAOcUBTJJWMRcsRtTSYU708946k6apIY7Y6cxxmlbNWGJKG2vabnkC5A0jFwyNsLJ4vKmIuF2dyKvPKQEGIKzvGK7BzGTiuQRDRLBs0CLWMDTtGRlAIbeySpg3eFcTcMKzdUUVt6HoruuFYKn5lmlUBho5krSZtBzK7LCol5Ub3OyqBd6f26EysLvCkoO6lWW7nmVpXOqsjwPob7b7a8NACpZ6MH1sl6vXKpu01Ao3qPxQnJAQYUsNB9RzvJPCdeiKyPNcudhgahch83hnkCHpULUqwWnt7MrsyJRVEqSK1a6vmHv1+xZSZ35WRnXzoAKqoorVKoNtHKELQJ2uIEcTMkzTBJwlrYK6XojgdCHjkqG6MBpyp01HBD9FRfuUpgwIjtOUQruX4IL20REY6ZAe0QhG1IQCWhwyPRfjFZYpIi96jGEHxcpi+C2Q8WhXZrxJnpSzU659m18ckBkIc3GRpFfp99LoOmcNFDZndkhj92lHnxQLR8rq9svhphKMwL6cF6nVrhZI1blypwpR3vWiKbCKMB0VdSl0eK6zJzKiOFyL6pV7FJ35l1wuG7cT4QERpI5a3u4ZlCD8OreQTVVYy9rQIpWL0YVqBVb21rzzG0LqtSNT2SN3paXWZNtZKV01rhi1sjeR5oY/JZk7sOWqOZYFYwFMGtikiJZA/FBOKvoc3kMygguZ4gkq7NEWrNjhgsLZ2ZHZy5qbJFY34iLAmNrArfFyRJOZ8EaafCMS3eELMnWGa/M1sma2jpR7vce9sov3M3S2iaaBcD/cPOes1xYOgvOF1pJ9W2FW0opaXpwr9ekWseYcjZmaY0BDe5wRuhSaKNl9tWYdS8hAixED43svc9K3lTGX53V+L1r81TeUTV6Jl9M3Ma9bdZMkWFqe4NRQFJR3F1Lcu0aM1BJpGQZd939uIxYVjZRN4YpyUFvY86sshCEStrEsDNhQ+6WIJrCra9crwai3NUOuJ8FAMNwDHHZUNvDyUEbPdx9BYbVOeuSxnFTCrY6xw1r4rlhdddLvevm0PhuWji0GdPyBjrirGMHF/6uydeDj65dO6wVrM5tU6NS1JFwk2sLDzB4gA4+Ju5Da1mS1phgtYCekAgoQDbAGK0zAVJNnM6cFg5hroOccJMhyYKUDeEOCqz+SFtAhqg6IYHZqRqleNhoYXg0zAhERtcTqmPinGMJyjrLe62YxjKD4xpWqnW6UtZQP7THzna5Y5Y5W5VSElFniQuIjQp3g5W+idG7tbWo+6ahjEekLDOgA7KgQWxBqGuNXaDb0BSu8BjF1prj8PvmpLEhLs5YjQ3nMPBKTBZjmA2s3uZ6cUcaHTLVRC+t55WoxTYCxcxYM4bO1jNJYL9csaXtMXQxexid72GU7hp0GTOQXp31xDphCAdorhZaI94IaryeOEioqewDRdylV1p309YSxJhFuBU0r4vaJDiJFAyENjwWDKT1SJWytZidybmnoHDe9C3YkLs2ORIZYXUiP0lBWq+1QuDawCq8bQUVCdxeDfBg+HUDJBhXIWvg6LJ8Hw9H9JHPPvJ5OvL5KsOcsQPuI58v6Q3AsXDTg6GRSh8f7eOjb2F8NOqFfCtCpq8oPvrNic+9qq8U+rBbH3Z7qbBb9HZcViSuD7tdLOx2kRhbNDjwysNuMd7hI3F9JK6PxPWRuD4SdzWRuDg3uvHBuW9FJO7tDbvFI320+/AKwm59jG2de9YH1PqA2isKqL150bP19qKNra61EA06XWsT0qYdUZWqKodVidqEOpvWJqTLRjah9Yu+s90ZnP/C9tyaa8xNtUeBTuObkpxKJ6Y63uyYXFCPSB7LiBT0BmSn0okFgndADCRpCqpoTKXPQuV9sdfmi71RjtcL5FKfhcpnobomLytuTm5o1Pe+2DcqV9WN+krDzfXFYt29S/F1l6K77fOtT+6DUbn3Mnovo0/u412Kt9aliN7P3st4CS+jdyn65D4+uc8N9zKiURXLyffjvYzey+i9jN7L6HP0rDRHj0/I4xPyXEZD8zl65uTouYUJea70pxWCNzYhDyr93OwcPdjO+LQ9Pm3P7U3bA3wG636ZtD1XlaPHJ+S59Ql5nKW4NylHT+196nP0XDpHDzr1JdL2+Bw9PkePjwv1caE+LtTHhb6Z2XdqzWSrZfT6dxqBXwZdZ17/q7LdbmNQ7ZVDpPbnSF016bVdVz7a0EcbXsFPCfrQwmsLLcTGvuU/auSDHHyQgw9y8EEOtybIwRslvFHCGyW8UcIbJZZvlPDfTPXfTH27swQbEWQZmVEUCbe70+Y2KpxFGNs90JEzJI9okAieBYoXAbC5bq84NgBD72QVsO5wrqZhheZqCpvOBoruus6B/NQ8qxQKA828FdlBz61oyBVqDshm1/lCb040WWtCUknNJNWnRH4Zbnc68AG6hPfgxhoKBuCXBjygD5Nkh9gUPDaZcqJT7vysXf2DvsPh2XhsODO2frKj609T45Po7JXY9GrrVNFJQma6JUme0HM1MxWw7IU2L2W5WZSoyqQqlV3yUJoC5P/tTeis00uvtTe2OoPBoN/e2Oi2t3obut7i6XTPp5BwoAGZfD7KTz8fAQJA6KF635LUvharoyobksU0zROLeIA2hLXLqkwyO19hi3isstRCn8gqt1FWVBt4ooa2TY0zjZ9ERlWhyfVjzbl0dp2MPE2kbUgNBebm1CtAB7x6hvDgERuNlc60BHXtbnunvQ5/9f+e+dQzFJlbWcahVyTn9gLaTfTGhR8WRHd/9cMPL7/6/uVX/3z59dcvv/r7KTQPCWgK2+FPf/nd/779dfDff/z5p29+b6t1Oqgf//abH//17+nOekWv/vDdj99/9+qPv/3PX7+BWp0zymRjyqgMdulR8EueEb36h3Qo0Ib9MdFEfScfSQJiOTRB5QM11pW7JyTVCLhLDWCfAn3F+vn98qkebG8sSqXJ+aNxpp8fc57e5cIM+5HuCfOV+ci+IeAwhr8k5FC/cM8u6UFZjGnGdId7Y6qHeJLCsshIx08EuoofUL2xnzGm4XnMIsElT1TwGQvuEmYm32f6VEy1PWSgK5ITYhenoXj8aXCXp7rzfXpoKgDTRp/cp6mG630QE0lmRiOaCsNHRI31AHsnQjOKByDawys05cEDuPmkbvpYnOihPgKSsmt8nJ5kpkIodqArHhHO9a9V8IN7Y5IVZjyWj3VYijwAXJHgCVfmTW7wqwsAk+Sna/tUxwdhu/YJUMHMonVFqVn2+5SbvTlJE0JzQxJZbrKJMbPiuyCC6QVSmpIjuGNo8MkHupoXfGbAD0GoHT2kGooPiUGaLnK49oN9eqwp8BGTpXGpjHg1yOMTSwcnJM+ImPTbPTBoeAAHLzOIS6MDTVxM6/TEvvmxzMh0nydjojGiC1lUG5HXbAQ0Pa1vonVN+tuG56DYJymdQcI+AV5BbUs506I3w7SWpjkxG1iBr1ky6J9OrGiacfSdmFDfiQn1HZgQcI1Xf/rWkfFcxHIm9FUxmsljxV7ucRGzxbjLfVLmTygcH89clspcJjvlWcqNZinWGHpyyktOTaKVFLWY/HheJcmPz6aYMJhJwEBnOZNqqVQn0SRWOuWpzWw5C0ol2g8mAnt3p9/bGuzshGeC+cCmsZyyEU/DCgedaBqeu6BJJ2XlzoYT36cJKVMVPCGCjAQpxsEOrxTjvL55ZrYX50HqLg/Hsyju1qF4/Wxh6/Mw2nXBaLceo8g8FyBwMuj6qnCyXoeT7mT3OzvrG4P1md3vzkPSuguS1uuR5DKxI9Z6q8Ja73WsMasNImfGaNSVpliLtZ4L1noY1twndsRaf1VY6yO0NgvzPAz1XTDUR+kKncQRG4NVYWNQh41Tup+HjYELNgb12Dg/yQXY2OX6CxVLwYRGwaAyxbxmeXkxZeqyVD2sOz3YwieZmJcEZvtCMA3L6m6ecqjuJrZpBqx5GzbT4TWWiI1/wX5NpV1emowERZqD6Nk5T7D9O/p/DcFOIJm3/PN9XifX81M4HF4qroAQpq3DxiwcW7Odtg53J9bhlmnuDTZnmvuY8Rg971RcdNjPekwLVk6oOrV3v/Goqozsc1A128MdVV/oReifH4QlpraMMluK6vHYliwbSTtekmsEysW9EzhSLxUbYoKY1yt/T3QDYetNYMuv6EcerSOJ+r16Q/bqxf8BUEsBAhQACgAAAAgAUoltVmk69HrzDgAAM60AAAQAAAAAAAAAAAAAAAAAAAAAAHNmZHRQSwUGAAAAAAEAAQAyAAAAFQ8AAAAA"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Multiple Columns';    
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