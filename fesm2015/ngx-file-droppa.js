import { __decorate } from 'tslib';
import { CommonModule } from '@angular/common';
import { EventEmitter, Injectable, NgZone, Input, Output, Component, ViewEncapsulation, ElementRef, Pipe, NgModule } from '@angular/core';

class FileWrapper {
    constructor(file) {
        this.loading = false;
        this.percentage = 0;
        this.removing = false;
        this.responseMessage = "Error happened during upload";
        this.id = Math.random().toString(36).substr(2);
        this.loadingSuccessful = true;
        this.uploader = null;
        this.File = file;
    }
}

let FilesStore = class FilesStore {
    constructor() {
        this.filesUpdated = new EventEmitter(true);
        this.startAutoUploading = null;
        this.beforeAddFile = null;
        this.WSfiles = new WeakSet();
        this._iFiles = [];
    }
    get files() {
        return this.iFiles.reduce((res, iFile) => {
            res.push(iFile.File);
            return res;
        }, []);
    }
    get iFiles() {
        return this._iFiles;
    }
    set iFiles(files) {
        this._iFiles = files;
    }
    addFiles(files) {
        files = files.filter((file) => {
            if (!this.WSfiles.has(file)) {
                if (typeof this.beforeAddFile === "function" && this.beforeAddFile(file)) {
                    this.WSfiles.add(file);
                    return true;
                }
                else if (typeof this.beforeAddFile !== "function") {
                    return true;
                }
                return false;
            }
        }).map((file) => {
            let iFile = new FileWrapper(file);
            this.startAutoUploading && this.startAutoUploading(iFile);
            return iFile;
        });
        this.iFiles = [...this.iFiles, ...files];
        this.filesUpdated.emit(true);
    }
    removeFiles(iFile) {
        this.WSfiles.delete(iFile.File);
        this.iFiles = this.iFiles.filter((item) => {
            return item.id !== iFile.id;
        });
        this.filesUpdated.emit(true);
    }
    clearStore() {
        this.iFiles.forEach((iFile) => {
            this.WSfiles.delete(iFile.File);
        });
        this.iFiles = [];
        this.filesUpdated.emit(true);
    }
};
FilesStore = __decorate([
    Injectable()
], FilesStore);

let FileUpload = class FileUpload {
    constructor() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.url = null;
        this.beforeRequest = null;
        this.beforeFileUpload = null;
        this.fileUploadedEvent = new EventEmitter(true);
    }
    uploadFiles(iFiles) {
        return Promise.all(iFiles.reduce((res, iFile) => {
            return res.push(this.uploadFile(iFile)), res;
        }, []));
    }
    uploadFile(iFile) {
        if (!this.url) {
            throw "url to upload needs to be provided";
        }
        if (iFile.loading) {
            throw "Already under loading";
        }
        let that = this, formData = new FormData();
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = (event) => {
            let progress = (event.loaded * 100) / event.total | 0;
            this.zone.run(() => {
                iFile.percentage = progress;
            });
        };
        const pr = new Promise((resolve, reject) => {
            xhr.onload = xhr.onerror = function (e) {
                that.zone.run(() => {
                    if (this["status"] == 200) {
                        iFile.loading = false;
                        iFile.loadingSuccessful = true;
                        resolve(true);
                    }
                    else {
                        iFile.loading = false;
                        iFile.loadingSuccessful = false;
                        reject(false);
                    }
                });
            };
        }).then((success) => {
            this.fileUploadedEvent.emit([success, xhr.response, iFile]);
        }, (reason) => {
            this.fileUploadedEvent.emit([reason, xhr.response, iFile]);
        });
        iFile.loading = true;
        xhr.open("POST", this.url, true);
        //Hook before request to provide user ability to add headers or something else in XHR
        typeof this.beforeRequest === "function" && this.beforeRequest(xhr);
        formData.append(`${iFile.File.name}`, iFile.File);
        if (typeof this.beforeFileUpload === "function") {
            Promise.resolve(this.beforeFileUpload(formData)).then((formData) => {
                formData && xhr.send(formData);
                formData || console.warn(`beforeFileUpload didn't return formData for ${iFile.File.name} and upload was aborted`);
            });
        }
        else {
            xhr.send(formData);
        }
        return pr;
    }
};
FileUpload = __decorate([
    Injectable()
], FileUpload);

let FileDroppa = class FileDroppa {
    constructor(filesStore, fileUploadService) {
        this.filesStore = filesStore;
        this.fileUploadService = fileUploadService;
        this.showFilesList = true;
        this.autoUpload = false;
        this.beforeRequest = null;
        this.beforeFileUpload = null;
        this.beforeAddFile = null;
        this.dropZoneTemplate = `
      <div class="file_dropZone_internal">
          Drop Files Here
      </div>
    `;
        this.filesUpdated = new EventEmitter(true);
        this.fileUploaded = new EventEmitter(true);
        this.uploadButtonTemplate = `
      <div class="file-droppa-btn orange">
        <span>Upload All Files</span>
       </div>
    `;
        this.removeButtonTemplate = `
      <div class="file-droppa-btn red">
        <span>Remove All Files</span>
       </div>
    `;
        this.multiple = true;
        filesStore.filesUpdated.subscribe(() => {
            this.filesUpdated.emit(filesStore.files);
        });
        fileUploadService.fileUploadedEvent.subscribe(([success, response, iFile]) => {
            if (success) {
                this.filesStore.removeFiles(iFile);
            }
            else {
                iFile.loadingSuccessful = false;
                iFile.responseText = false;
            }
            this.fileUploaded.emit([success, response, iFile.file]);
        });
        filesStore.startAutoUploading = this.startAutoUploading.bind(this);
    }
    set url(tmpUrl) {
        this.fileUploadService.url = tmpUrl;
    }
    startAutoUploading(iFile) {
        this.autoUpload && this.fileUploadService.uploadFile(iFile);
    }
    /**
     * We got to pass Input parameters to Service instances
     */
    ngOnInit() {
        this.filesStore.beforeAddFile = (typeof this.beforeAddFile === "function") ? this.beforeAddFile : (file) => true;
        this.fileUploadService.beforeRequest = this.beforeRequest;
        this.fileUploadService.beforeFileUpload = (typeof this.beforeFileUpload === "function") ? this.beforeFileUpload : (formData) => true;
    }
    removeAllFiles() {
        this.filesStore.clearStore();
    }
    uploadAllFiles() {
        this.fileUploadService.uploadFiles(this.filesStore.iFiles);
    }
};
FileDroppa.ctorParameters = () => [
    { type: FilesStore },
    { type: FileUpload }
];
__decorate([
    Input()
], FileDroppa.prototype, "showFilesList", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "autoUpload", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "beforeRequest", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "url", null);
__decorate([
    Input()
], FileDroppa.prototype, "beforeFileUpload", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "beforeAddFile", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "dropZoneTemplate", void 0);
__decorate([
    Output()
], FileDroppa.prototype, "filesUpdated", void 0);
__decorate([
    Output()
], FileDroppa.prototype, "fileUploaded", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "uploadButtonTemplate", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "removeButtonTemplate", void 0);
__decorate([
    Input()
], FileDroppa.prototype, "multiple", void 0);
FileDroppa = __decorate([
    Component({
        selector: 'fileDroppa',
        providers: [FilesStore, FileUpload],
        encapsulation: ViewEncapsulation.None,
        template: `
        <div class="file-droppa-container">
            <fileDropZone [multiple]="multiple">
                <div [innerHTML]="dropZoneTemplate"></div>
            </fileDropZone>
            <br/>
            <ng-content></ng-content>
            <fileList *ngIf="showFilesList"></fileList>
            <div class="file-droppa-btns" *ngIf="filesStore.iFiles.length">
              <div #uploadButtonArea (click)="uploadAllFiles()">
                <ng-content select="[upload-button]"></ng-content>
              </div>
              <div *ngIf="uploadButtonArea.children.length === 0" (click)="uploadAllFiles();"
                   [innerHTML]="uploadButtonTemplate"></div>
              <div #removeButtonArea (click)="removeAllFiles();">
                <ng-content select="[remove-button]"></ng-content>
              </div>
              <div *ngIf="removeButtonArea.children.length === 0" (click)="removeAllFiles();"
                   [innerHTML]="removeButtonTemplate"></div>
            </div>
        </div>
    `,
        styles: [`
        .file-droppa-container {
            width: 400px;
        }
        .file-droppa-btns {
         display: flex;
          align-items: center;
          justify-content: center;

        }
        .file-droppa-btn {
              margin: 15px;
              padding: 0;

              overflow: hidden;

              border-width: 0;
              outline: none;
              border-radius: 2px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

              background-color: #2ecc71;
              color: #ecf0f1;

              transition: background-color .3s;
              width: 140px;
              text-align: center;
              font-size: 12px;

        }

        .file-droppa-btn:hover{
          background-color: #27ae60;
        }

        .file-droppa-btn span {
          display: block;
          padding: 12px 24px;
        }

        .file-droppa-btn.orange {
          background-color: #e67e22;
        }

        .file-droppa-btn.orange:hover {
          background-color: #d35400;
        }

        .file-droppa-btn.red {
          background-color: #e74c3c;
        }

        .file-droppa-btn.red:hover{
          background-color: #c0392b;
        }
        `]
    })
], FileDroppa);

let File = class File {
    constructor() {
        this.ext = '';
        this.previewSrc = '';
        this.fileName = '';
        //TODO: workaround - depends on strict values;
        this.previewHeight = 75;
        this.removeFile = new EventEmitter(true);
    }
    //ngHooks
    ngAfterContentInit() {
        this.file && this.getFileType();
    }
    removeFileListener(e) {
        e.preventDefault();
        this.removeFile && this.removeFile.emit(true);
    }
    getFileType() {
        let imageType = /^image\//, reader;
        if (!imageType.test(this.file.type)) {
            let ext = this.file.name.split('.').pop();
            this.fileName = this.file.name;
            this.ext = ext.length > 3
                ? 'file'
                : `.${ext}`;
            return;
        }
        reader = new FileReader();
        reader.addEventListener("load", () => {
            let img = new Image, result = reader.result;
            img.onload = () => {
                let ratio = img.height / img.width, scaledHeight = ratio * this.previewHeight;
                this.previewSrc = result;
                this.previewHeight = (scaledHeight < this.previewHeight)
                    ? this.previewHeight
                    : scaledHeight;
            };
            img.src = result;
        }, false);
        if (this.file) {
            reader.readAsDataURL(this.file);
        }
    }
};
__decorate([
    Input()
], File.prototype, "file", void 0);
__decorate([
    Input()
], File.prototype, "index", void 0);
__decorate([
    Input()
], File.prototype, "percentage", void 0);
__decorate([
    Input()
], File.prototype, "loadingSuccessful", void 0);
__decorate([
    Input()
], File.prototype, "responseMessage", void 0);
__decorate([
    Output()
], File.prototype, "removeFile", void 0);
File = __decorate([
    Component({
        selector: 'fileItem',
        template: `
        <div *ngIf="file" class="file-container">
            <div class="flex-block file-preview" [ngStyle]="{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight + 'px'}">
                <div *ngIf="ext" class="flex-block file-preview-ext ">{{ext}}</div>
                <div *ngIf="!previewSrc" class="flex-block file-name">{{fileName}}</div>
                <progress [value]="percentage" max="100" class="file-progress"></progress>
            </div>
            <div class="file-remove">
                <span class="remove"><a href="#" (click)="removeFileListener($event)"></a></span>
            </div>
            <div *ngIf="!loadingSuccessful" class="file-upload-error">
                <span class="warning"></span>
                <span *ngIf="responseMessage" class="tooltiptext">{{responseMessage}}</span>
            </div>
            <div class="flex-block">{{file.size | getSize }}</div>
        </div>
    `,
        styles: [`
        .file-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 75px;
            margin: 20px 10px 0 0;
            transition: opacity 0.5s, margin 0.5s linear;
            flex-direction: column;
            position:relative;
        }

        .file-container.uploaded {
            opacity: 0;
            margin: 0;
            height: 0;
            overflow: hidden;
        }

        .flex-block {
            width: 90%;
            text-align: center;
            font-size: 0.8em;
            margin: 2px 0;
        }

        .file-remove {
            cursor: pointer;
            position: absolute;
            left: 87%;
            top: 8px;
        }
        .file-upload-error {
            position: absolute;
            top: 8px;
            left:-8px;
        }
        .file-name {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .file-preview {
            background: #ccc;
            border-radius: 2px;
            width: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-size: cover;
            color: #fff;
        }

         .file-preview-ext {
            text-transform: uppercase;
        }

        .file-progress {
            width: 80%;
            display: block;
        }


        button {
            margin: 0;
        }

span {
    position:relative;
    z-index:1;
    overflow:hidden;
    list-style:none;
    padding:0;
    margin:0 0 0.25em;
}

span a:link {
    display:block;
    border:0;
    padding-left:28px;
    color:#c55500;
}

span a:hover,
span a:focus {
    color:#730800;
    background:transparent;
}

span:before,
span:after,
span a:before,
span a:after {
    content:"";
    position:absolute;
    top:50%;
    left:0;
}

span a:before,
span a:after {
    margin:-8px 0 0;
    background:#c55500;
}

span a:hover:before,
span a:focus:before {
    background:#730800;
}


.remove a:before {
    width:16px;
    height:16px;
    /* css3 */
    -webkit-border-radius:16px;
    -moz-border-radius:16px;
    border-radius:16px;
}

.remove a:after {
    left:3px;
    width:10px;
    height:2px;
    margin-top:-1px;
    background:#fff;
}
.warning:before {
    content:"!";
    z-index:2;
    left:8px;
    margin-top:-8px;
    font-size:14px;
    font-weight:bold;
    color:#000;
}

.warning:after {
    z-index:1;
    border-width:0 11px 18px;
    border-style:solid;
    border-color:#F8D201 transparent;
    margin-top:-10px;
    background:transparent;
}

.file-upload-error .tooltiptext {
    visibility: hidden;
    white-space:nowrap;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
}

.file-upload-error:hover .tooltiptext {
    visibility: visible;
}

    `]
    })
], File);

let FileParser = class FileParser {
    processFilesFromInput(items) {
        let newFiles = Object.keys(items).reduce((result, key) => {
            let entry, item = items[key];
            if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                if (entry.isFile) {
                    result.push(Promise.resolve(item.getAsFile()));
                }
                else if (entry.isDirectory) {
                    result.push(this.processDirectory(entry));
                }
            }
            else if (item.getAsFile != null) {
                if ((item.kind == null) || item.kind === "file") {
                    result.push(Promise.resolve(item.getAsFile()));
                }
            }
            else if (item.isFile) {
                let pr = new Promise((resolve, reject) => {
                    item.file(resolve, reject);
                });
                result.push(pr);
            }
            else if (item.isDirectory) {
                result.push(this.processDirectory(item));
            }
            return result;
        }, []);
        return Promise.all(newFiles).then(this.flattenArrayOfFiles);
    }
    processDirectory(directory) {
        let dirReader = directory.createReader(), result = [];
        var readEntries = () => {
            return new Promise((resolve, reject) => {
                dirReader.readEntries((entries) => {
                    let pr = [];
                    if (entries.length) {
                        for (var i = 0; i < entries.length; i++) {
                            pr.push(this.processFilesFromInput({ 0: entries[i] }));
                        }
                    }
                    else {
                        resolve(null);
                    }
                    result.push(readEntries());
                    Promise.all(pr).then(this.flattenArrayOfFiles).then(resolve);
                }, (error) => {
                    reject("Error while reading folder");
                });
            });
        };
        result.push(readEntries());
        return Promise.all(result).then(this.flattenArrayOfFiles);
    }
    processInputFromDrop(e) {
        let items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
            return Promise.resolve(this.processFilesFromInput(items));
        }
        else if (items && items.length && !items[0].webkitGetAsEntry) {
            return Promise.resolve(items);
        }
        else if (e.dataTransfer.files) {
            let files = [];
            for (let i = 0, l = e.dataTransfer.files.length; i < l; i++) {
                files.push(e.dataTransfer.files[i]);
            }
            return Promise.resolve(files);
        }
    }
    flattenArrayOfFiles(arrayOfPromises) {
        return Promise.resolve(arrayOfPromises.reduce((result, file) => {
            if (file) {
                return [...result, ...file];
            }
        }, []));
    }
};
FileParser = __decorate([
    Injectable()
], FileParser);

let FileDropZone = class FileDropZone {
    constructor(filesStore, el, fileParser) {
        this.filesStore = filesStore;
        this.el = el;
        this.fileParser = fileParser;
        this.hiddenFileInput = null;
        this.promise = null;
        this.createHiddenInput();
    }
    set multiple(value) {
        const attributeName = 'multiple';
        if (value) {
            this.hiddenFileInput.setAttribute(attributeName, attributeName);
        }
        else {
            this.hiddenFileInput.removeAttribute(attributeName);
        }
    }
    /*
     * Host Event Listeners
     * */
    onClick(e) {
        this.hiddenFileInput && this.hiddenFileInput.click();
    }
    drop(e) {
        e.preventDefault();
        if (!e.dataTransfer || !e.dataTransfer.files.length) {
            return;
        }
        this.promise = this.fileParser.processInputFromDrop(e)
            .then((files) => {
            this.updateFilesStore([...files]);
        });
        this.updateStyles();
    }
    dragenter(e) {
        e.preventDefault();
    }
    dragover(e) {
        e.preventDefault();
        this.updateStyles(true);
    }
    dragleave(e) {
        e.preventDefault();
        this.updateStyles();
    }
    /*
     * Public methods
     * */
    OnDestroy() {
        this.hiddenFileInput && document.body.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
    }
    updateStyles(dragOver = false) {
        //this.el.nativeElement.classList[(dragOver) ? 'add' : 'remove'](this._overCls);
    }
    updateFilesStore(files) {
        this.filesStore.addFiles(files);
    }
    createHiddenInput() {
        this.hiddenFileInput && document.body.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = document.createElement("input");
        this.hiddenFileInput.setAttribute("type", "file");
        this.hiddenFileInput.setAttribute("multiple", "multiple");
        this.hiddenFileInput.style.visibility = "hidden";
        this.hiddenFileInput.style.position = "absolute";
        this.hiddenFileInput.style.top = "0";
        this.hiddenFileInput.style.left = "0";
        this.hiddenFileInput.style.height = "0";
        this.hiddenFileInput.style.width = "0";
        this.hiddenFileInput.className = "_hiddenInputClassName";
        document.body.appendChild(this.hiddenFileInput);
        this.hiddenFileInput.addEventListener("change", (e) => {
            let files = [];
            for (let i = 0, l = e.target.files.length; i < l; i++) {
                files.push(e.target.files[i]);
            }
            this.hiddenFileInput.value = "";
            this.updateFilesStore(files);
        });
    }
};
FileDropZone.ctorParameters = () => [
    { type: FilesStore },
    { type: ElementRef },
    { type: FileParser }
];
__decorate([
    Input()
], FileDropZone.prototype, "multiple", null);
FileDropZone = __decorate([
    Component({
        selector: 'fileDropZone, [fileDropZone]',
        providers: [FileParser],
        template: `
        <ng-content></ng-content>
    `,
        host: {
            '(drop)': 'drop($event)',
            '(dragenter)': 'dragenter($event)',
            '(dragover)': 'dragover($event)',
            '(dragleave)': 'dragleave($event)',
            '(click)': 'onClick($event)'
        },
        encapsulation: ViewEncapsulation.None,
        styles: [`
        .file_dropZone_internal {
            border: 3px dashed #DDD;
            border-radius:10px;
            padding:10px;
            width:400px;
            height:200px;
            color:#CCC;
            text-align:center;
            display:table-cell;
            vertical-align:middle;
            cursor:pointer;
        }
    `]
    })
], FileDropZone);

let FileList = class FileList {
    constructor(filesStore) {
        this.filesStore = filesStore;
    }
    removeFile(iFile) {
        this.filesStore.removeFiles(iFile);
    }
};
FileList.ctorParameters = () => [
    { type: FilesStore }
];
FileList = __decorate([
    Component({
        selector: 'fileList, [fileList]',
        template: `
        <div class="file-list">
            <fileItem *ngFor="let file of filesStore.iFiles"
                [file]="file.File"
                [percentage]="file.percentage"
                [loadingSuccessful]="file.loadingSuccessful"
                [responseMessage]="file.responseMessage"
                (removeFile)="removeFile(file)">
            </fileItem>
        </div>
    `,
        styles: [`
        .file-list {
            width: 430px;
            margin-bottom: 5px;
            display: flex;
            flex-flow: wrap;
            justify-content: flex-start;
         }
    `]
    })
], FileList);

/*
 * Converts bytes to MB, GB and so on
 * Takes an bytes value argument that defaults to 0.
 * Usage:
 *   value | getSize
 * Example:
 *   {{ 1024 |  getSize}}
 *   formats to: 1 MB
 */
let GetSizePipe = class GetSizePipe {
    transform(value) {
        let bytes = value || 0, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
        if (bytes === 0) {
            return '0 Byte';
        }
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }
};
GetSizePipe = __decorate([
    Pipe({ name: 'getSize' })
], GetSizePipe);

let NgxFileDroppaModule = class NgxFileDroppaModule {
};
NgxFileDroppaModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            GetSizePipe,
            FileDroppa,
            File,
            FileDropZone,
            FileList
        ],
        exports: [
            FileDroppa,
            File,
            FileDropZone,
            FileList
        ],
    })
], NgxFileDroppaModule);

/*
 * Public API Surface of ngx-file-droppa
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFileDroppaModule, GetSizePipe as ɵa, FileDroppa as ɵb, FilesStore as ɵc, FileUpload as ɵd, File as ɵe, FileDropZone as ɵf, FileParser as ɵg, FileList as ɵh };
//# sourceMappingURL=ngx-file-droppa.js.map
