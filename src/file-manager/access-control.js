/**
 * File Manager API sample
 */
this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

    // initialize File Manager component
    var filemanagerInstance = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileAccess/FileOperations',
            uploadUrl: hostUrl + 'api/FileAccess/Upload',
            downloadUrl: hostUrl + 'api/FileAccess/Download',
            getImageUrl: hostUrl + 'api/FileAccess/GetImage'
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        uploadSettings: { directoryUpload: true },
    });

    // render initialized File Manager
    filemanagerInstance.appendTo('#filemanager');
};
