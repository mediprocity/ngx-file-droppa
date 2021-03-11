import { NgIf, NgStyle, NgForOf, CommonModule } from '@angular/common';
import { EventEmitter, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, NgZone, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵlistener, ɵɵProvidersFeature, ɵɵprojectionDef, ɵɵprojection, Component, ViewEncapsulation, Input, ɵɵdefinePipe, Pipe, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelement, ɵɵtemplate, ɵɵproperty, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵpipe, ɵɵpureFunction2, ɵɵpipeBind1, Output, ɵɵsanitizeHtml, ɵɵreference, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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

class FilesStore {
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
}
FilesStore.ɵfac = function FilesStore_Factory(t) { return new (t || FilesStore)(); };
FilesStore.ɵprov = ɵɵdefineInjectable({ token: FilesStore, factory: FilesStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FilesStore, [{
        type: Injectable
    }], null, null); })();

class FileUpload {
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
}
FileUpload.ɵfac = function FileUpload_Factory(t) { return new (t || FileUpload)(); };
FileUpload.ɵprov = ɵɵdefineInjectable({ token: FileUpload, factory: FileUpload.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileUpload, [{
        type: Injectable
    }], null, null); })();

class FileParser {
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
                return [...result, ...[file]];
            }
        }, []));
    }
}
FileParser.ɵfac = function FileParser_Factory(t) { return new (t || FileParser)(); };
FileParser.ɵprov = ɵɵdefineInjectable({ token: FileParser, factory: FileParser.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileParser, [{
        type: Injectable
    }], null, null); })();

const _c0$2 = ["*"];
class FileDropZone {
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
}
FileDropZone.ɵfac = function FileDropZone_Factory(t) { return new (t || FileDropZone)(ɵɵdirectiveInject(FilesStore), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FileParser)); };
FileDropZone.ɵcmp = ɵɵdefineComponent({ type: FileDropZone, selectors: [["fileDropZone"], ["", "fileDropZone", ""]], hostBindings: function FileDropZone_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("drop", function FileDropZone_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function FileDropZone_dragenter_HostBindingHandler($event) { return ctx.dragenter($event); })("dragover", function FileDropZone_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("dragleave", function FileDropZone_dragleave_HostBindingHandler($event) { return ctx.dragleave($event); })("click", function FileDropZone_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { multiple: "multiple" }, features: [ɵɵProvidersFeature([FileParser])], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function FileDropZone_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileDropZone, [{
        type: Component,
        args: [{
                selector: 'fileDropZone, [fileDropZone]',
                providers: [FileParser],
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
    `],
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
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: FilesStore }, { type: ElementRef }, { type: FileParser }]; }, { multiple: [{
            type: Input
        }] }); })();

/*
 * Converts bytes to MB, GB and so on
 * Takes an bytes value argument that defaults to 0.
 * Usage:
 *   value | getSize
 * Example:
 *   {{ 1024 |  getSize}}
 *   formats to: 1 MB
 */
class GetSizePipe {
    transform(value) {
        let bytes = value || 0, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
        if (bytes === 0) {
            return '0 Byte';
        }
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }
}
GetSizePipe.ɵfac = function GetSizePipe_Factory(t) { return new (t || GetSizePipe)(); };
GetSizePipe.ɵpipe = ɵɵdefinePipe({ name: "getSize", type: GetSizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GetSizePipe, [{
        type: Pipe,
        args: [{ name: 'getSize' }]
    }], null, null); })();

function File_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.ext);
} }
function File_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.fileName);
} }
function File_div_0_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.responseMessage);
} }
function File_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "span", 14);
    ɵɵtemplate(2, File_div_0_div_8_span_2_Template, 2, 1, "span", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.responseMessage);
} }
const _c0$1 = function (a0, a1) { return { "background-image": a0, "height": a1 }; };
function File_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, File_div_0_div_2_Template, 2, 1, "div", 3);
    ɵɵtemplate(3, File_div_0_div_3_Template, 2, 1, "div", 4);
    ɵɵelement(4, "progress", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵelementStart(6, "span", 7);
    ɵɵelementStart(7, "a", 8);
    ɵɵlistener("click", function File_div_0_Template_a_click_7_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.removeFileListener($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(8, File_div_0_div_8_Template, 3, 1, "div", 9);
    ɵɵelementStart(9, "div", 10);
    ɵɵtext(10);
    ɵɵpipe(11, "getSize");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(8, _c0$1, "url(" + ctx_r0.previewSrc + ")", ctx_r0.previewHeight + "px"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.ext);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.previewSrc);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.percentage);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !ctx_r0.loadingSuccessful);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 6, ctx_r0.file.size));
} }
class File {
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
}
File.ɵfac = function File_Factory(t) { return new (t || File)(); };
File.ɵcmp = ɵɵdefineComponent({ type: File, selectors: [["fileItem"]], inputs: { file: "file", index: "index", percentage: "percentage", loadingSuccessful: "loadingSuccessful", responseMessage: "responseMessage" }, outputs: { removeFile: "removeFile" }, decls: 1, vars: 1, consts: [["class", "file-container", 4, "ngIf"], [1, "file-container"], [1, "flex-block", "file-preview", 3, "ngStyle"], ["class", "flex-block file-preview-ext ", 4, "ngIf"], ["class", "flex-block file-name", 4, "ngIf"], ["max", "100", 1, "file-progress", 3, "value"], [1, "file-remove"], [1, "remove"], ["href", "#", 3, "click"], ["class", "file-upload-error", 4, "ngIf"], [1, "flex-block"], [1, "flex-block", "file-preview-ext"], [1, "flex-block", "file-name"], [1, "file-upload-error"], [1, "warning"], ["class", "tooltiptext", 4, "ngIf"], [1, "tooltiptext"]], template: function File_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, File_div_0_Template, 12, 11, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.file);
    } }, directives: [NgIf, NgStyle], pipes: [GetSizePipe], styles: [".file-container[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 10px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n            position:relative;\n        }\n\n        .file-container.uploaded[_ngcontent-%COMP%] {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .flex-block[_ngcontent-%COMP%] {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n\n        .file-remove[_ngcontent-%COMP%] {\n            cursor: pointer;\n            position: absolute;\n            left: 87%;\n            top: 8px;\n        }\n        .file-upload-error[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 8px;\n            left:-8px;\n        }\n        .file-name[_ngcontent-%COMP%] {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n\n        .file-preview[_ngcontent-%COMP%] {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n\n         .file-preview-ext[_ngcontent-%COMP%] {\n            text-transform: uppercase;\n        }\n\n        .file-progress[_ngcontent-%COMP%] {\n            width: 80%;\n            display: block;\n        }\n\n\n        button[_ngcontent-%COMP%] {\n            margin: 0;\n        }\n\nspan[_ngcontent-%COMP%] {\n    position:relative;\n    z-index:1;\n    overflow:hidden;\n    list-style:none;\n    padding:0;\n    margin:0 0 0.25em;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link {\n    display:block;\n    border:0;\n    padding-left:28px;\n    color:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color:#730800;\n    background:transparent;\n}\n\nspan[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]:after, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    content:\"\";\n    position:absolute;\n    top:50%;\n    left:0;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    margin:-8px 0 0;\n    background:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:before {\n    background:#730800;\n}\n\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    width:16px;\n    height:16px;\n    \n    -webkit-border-radius:16px;\n    -moz-border-radius:16px;\n    border-radius:16px;\n}\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    left:3px;\n    width:10px;\n    height:2px;\n    margin-top:-1px;\n    background:#fff;\n}\n.warning[_ngcontent-%COMP%]:before {\n    content:\"!\";\n    z-index:2;\n    left:8px;\n    margin-top:-8px;\n    font-size:14px;\n    font-weight:bold;\n    color:#000;\n}\n\n.warning[_ngcontent-%COMP%]:after {\n    z-index:1;\n    border-width:0 11px 18px;\n    border-style:solid;\n    border-color:#F8D201 transparent;\n    margin-top:-10px;\n    background:transparent;\n}\n\n.file-upload-error[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: hidden;\n    white-space:nowrap;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    \n    position: absolute;\n    z-index: 1;\n}\n\n.file-upload-error[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: visible;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(File, [{
        type: Component,
        args: [{
                selector: 'fileItem',
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

    `],
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
    `
            }]
    }], null, { file: [{
            type: Input
        }], index: [{
            type: Input
        }], percentage: [{
            type: Input
        }], loadingSuccessful: [{
            type: Input
        }], responseMessage: [{
            type: Input
        }], removeFile: [{
            type: Output
        }] }); })();

function FileList_fileItem_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "fileItem", 2);
    ɵɵlistener("removeFile", function FileList_fileItem_1_Template_fileItem_removeFile_0_listener() { ɵɵrestoreView(_r3); const file_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.removeFile(file_r1); });
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    ɵɵproperty("file", file_r1.File)("percentage", file_r1.percentage)("loadingSuccessful", file_r1.loadingSuccessful)("responseMessage", file_r1.responseMessage);
} }
class FileList {
    constructor(filesStore) {
        this.filesStore = filesStore;
    }
    removeFile(iFile) {
        this.filesStore.removeFiles(iFile);
    }
}
FileList.ɵfac = function FileList_Factory(t) { return new (t || FileList)(ɵɵdirectiveInject(FilesStore)); };
FileList.ɵcmp = ɵɵdefineComponent({ type: FileList, selectors: [["fileList"], ["", "fileList", ""]], decls: 2, vars: 1, consts: [[1, "file-list"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile", 4, "ngFor", "ngForOf"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile"]], template: function FileList_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, FileList_fileItem_1_Template, 1, 4, "fileItem", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.filesStore.iFiles);
    } }, directives: [NgForOf, File], styles: [".file-list[_ngcontent-%COMP%] {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileList, [{
        type: Component,
        args: [{
                selector: 'fileList, [fileList]',
                styles: [`
        .file-list {
            width: 430px;
            margin-bottom: 5px;
            display: flex;
            flex-flow: wrap;
            justify-content: flex-start;
         }
    `],
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
    `
            }]
    }], function () { return [{ type: FilesStore }]; }, null); })();

function FileDroppa_fileList_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "fileList");
} }
function FileDroppa_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function FileDroppa_div_6_div_4_Template_div_click_0_listener() { ɵɵrestoreView(_r7); const ctx_r6 = ɵɵnextContext(2); return ctx_r6.uploadAllFiles(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r3.uploadButtonTemplate, ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function FileDroppa_div_6_div_8_Template_div_click_0_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.removeAllFiles(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r5.removeButtonTemplate, ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "div", 6, 7);
    ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_1_listener() { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(); return ctx_r10.uploadAllFiles(); });
    ɵɵprojection(3, 1);
    ɵɵelementEnd();
    ɵɵtemplate(4, FileDroppa_div_6_div_4_Template, 1, 1, "div", 8);
    ɵɵelementStart(5, "div", 6, 9);
    ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_5_listener() { ɵɵrestoreView(_r11); const ctx_r12 = ɵɵnextContext(); return ctx_r12.removeAllFiles(); });
    ɵɵprojection(7, 2);
    ɵɵelementEnd();
    ɵɵtemplate(8, FileDroppa_div_6_div_8_Template, 1, 1, "div", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵɵreference(2);
    const _r4 = ɵɵreference(6);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", _r2.children.length === 0);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", _r4.children.length === 0);
} }
const _c0 = ["*", [["", "upload-button", ""]], [["", "remove-button", ""]]];
const _c1 = ["*", "[upload-button]", "[remove-button]"];
class FileDroppa {
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
}
FileDroppa.ɵfac = function FileDroppa_Factory(t) { return new (t || FileDroppa)(ɵɵdirectiveInject(FilesStore), ɵɵdirectiveInject(FileUpload)); };
FileDroppa.ɵcmp = ɵɵdefineComponent({ type: FileDroppa, selectors: [["fileDroppa"]], inputs: { showFilesList: "showFilesList", autoUpload: "autoUpload", beforeRequest: "beforeRequest", url: "url", beforeFileUpload: "beforeFileUpload", beforeAddFile: "beforeAddFile", dropZoneTemplate: "dropZoneTemplate", uploadButtonTemplate: "uploadButtonTemplate", removeButtonTemplate: "removeButtonTemplate", multiple: "multiple" }, outputs: { filesUpdated: "filesUpdated", fileUploaded: "fileUploaded" }, features: [ɵɵProvidersFeature([FilesStore, FileUpload])], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "file-droppa-container"], [3, "multiple"], [3, "innerHTML"], [4, "ngIf"], ["class", "file-droppa-btns", 4, "ngIf"], [1, "file-droppa-btns"], [3, "click"], ["uploadButtonArea", ""], [3, "innerHTML", "click", 4, "ngIf"], ["removeButtonArea", ""], [3, "innerHTML", "click"]], template: function FileDroppa_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c0);
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "fileDropZone", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelementEnd();
        ɵɵelement(3, "br");
        ɵɵprojection(4);
        ɵɵtemplate(5, FileDroppa_fileList_5_Template, 1, 0, "fileList", 3);
        ɵɵtemplate(6, FileDroppa_div_6_Template, 9, 2, "div", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("multiple", ctx.multiple);
        ɵɵadvance(1);
        ɵɵproperty("innerHTML", ctx.dropZoneTemplate, ɵɵsanitizeHtml);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.showFilesList);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.filesStore.iFiles.length);
    } }, directives: [FileDropZone, NgIf, FileList], styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileDroppa, [{
        type: Component,
        args: [{
                selector: 'fileDroppa',
                providers: [FilesStore, FileUpload],
                encapsulation: ViewEncapsulation.None,
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
        `
                ],
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
    `
            }]
    }], function () { return [{ type: FilesStore }, { type: FileUpload }]; }, { showFilesList: [{
            type: Input
        }], autoUpload: [{
            type: Input
        }], beforeRequest: [{
            type: Input
        }], url: [{
            type: Input
        }], beforeFileUpload: [{
            type: Input
        }], beforeAddFile: [{
            type: Input
        }], dropZoneTemplate: [{
            type: Input
        }], filesUpdated: [{
            type: Output
        }], fileUploaded: [{
            type: Output
        }], uploadButtonTemplate: [{
            type: Input
        }], removeButtonTemplate: [{
            type: Input
        }], multiple: [{
            type: Input
        }] }); })();

class NgxFileDroppaModule {
}
NgxFileDroppaModule.ɵmod = ɵɵdefineNgModule({ type: NgxFileDroppaModule });
NgxFileDroppaModule.ɵinj = ɵɵdefineInjector({ factory: function NgxFileDroppaModule_Factory(t) { return new (t || NgxFileDroppaModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxFileDroppaModule, { declarations: [GetSizePipe,
        FileDroppa,
        File,
        FileDropZone,
        FileList], imports: [CommonModule], exports: [FileDroppa,
        File,
        FileDropZone,
        FileList] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxFileDroppaModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-file-droppa
 */

/**
 * Generated bundle index. Do not edit.
 */

export { File, FileDropZone, FileDroppa, FileList, NgxFileDroppaModule };
//# sourceMappingURL=ngx-file-droppa.js.map
