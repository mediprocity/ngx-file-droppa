(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-file-droppa', ['exports', '@angular/common', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-file-droppa'] = {}, global.ng.common, global.ng.core));
}(this, (function (exports, common, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var FileWrapper = /** @class */ (function () {
        function FileWrapper(file) {
            this.loading = false;
            this.percentage = 0;
            this.removing = false;
            this.responseMessage = "Error happened during upload";
            this.id = Math.random().toString(36).substr(2);
            this.loadingSuccessful = true;
            this.uploader = null;
            this.File = file;
        }
        return FileWrapper;
    }());

    var FilesStore = /** @class */ (function () {
        function FilesStore() {
            this.filesUpdated = new core.EventEmitter(true);
            this.startAutoUploading = null;
            this.beforeAddFile = null;
            this.WSfiles = new WeakSet();
            this._iFiles = [];
        }
        Object.defineProperty(FilesStore.prototype, "files", {
            get: function () {
                return this.iFiles.reduce(function (res, iFile) {
                    res.push(iFile.File);
                    return res;
                }, []);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilesStore.prototype, "iFiles", {
            get: function () {
                return this._iFiles;
            },
            set: function (files) {
                this._iFiles = files;
            },
            enumerable: true,
            configurable: true
        });
        FilesStore.prototype.addFiles = function (files) {
            var _this = this;
            files = files.filter(function (file) {
                if (!_this.WSfiles.has(file)) {
                    if (typeof _this.beforeAddFile === "function" && _this.beforeAddFile(file)) {
                        _this.WSfiles.add(file);
                        return true;
                    }
                    else if (typeof _this.beforeAddFile !== "function") {
                        return true;
                    }
                    return false;
                }
            }).map(function (file) {
                var iFile = new FileWrapper(file);
                _this.startAutoUploading && _this.startAutoUploading(iFile);
                return iFile;
            });
            this.iFiles = __spread(this.iFiles, files);
            this.filesUpdated.emit(true);
        };
        FilesStore.prototype.removeFiles = function (iFile) {
            this.WSfiles.delete(iFile.File);
            this.iFiles = this.iFiles.filter(function (item) {
                return item.id !== iFile.id;
            });
            this.filesUpdated.emit(true);
        };
        FilesStore.prototype.clearStore = function () {
            var _this = this;
            this.iFiles.forEach(function (iFile) {
                _this.WSfiles.delete(iFile.File);
            });
            this.iFiles = [];
            this.filesUpdated.emit(true);
        };
        FilesStore = __decorate([
            core.Injectable()
        ], FilesStore);
        return FilesStore;
    }());

    var FileUpload = /** @class */ (function () {
        function FileUpload() {
            this.zone = new core.NgZone({ enableLongStackTrace: false });
            this.url = null;
            this.beforeRequest = null;
            this.beforeFileUpload = null;
            this.fileUploadedEvent = new core.EventEmitter(true);
        }
        FileUpload.prototype.uploadFiles = function (iFiles) {
            var _this = this;
            return Promise.all(iFiles.reduce(function (res, iFile) {
                return res.push(_this.uploadFile(iFile)), res;
            }, []));
        };
        FileUpload.prototype.uploadFile = function (iFile) {
            var _this = this;
            if (!this.url) {
                throw "url to upload needs to be provided";
            }
            if (iFile.loading) {
                throw "Already under loading";
            }
            var that = this, formData = new FormData();
            var xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function (event) {
                var progress = (event.loaded * 100) / event.total | 0;
                _this.zone.run(function () {
                    iFile.percentage = progress;
                });
            };
            var pr = new Promise(function (resolve, reject) {
                xhr.onload = xhr.onerror = function (e) {
                    var _this = this;
                    that.zone.run(function () {
                        if (_this["status"] == 200) {
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
            }).then(function (success) {
                _this.fileUploadedEvent.emit([success, xhr.response, iFile]);
            }, function (reason) {
                _this.fileUploadedEvent.emit([reason, xhr.response, iFile]);
            });
            iFile.loading = true;
            xhr.open("POST", this.url, true);
            //Hook before request to provide user ability to add headers or something else in XHR
            typeof this.beforeRequest === "function" && this.beforeRequest(xhr);
            formData.append("" + iFile.File.name, iFile.File);
            if (typeof this.beforeFileUpload === "function") {
                Promise.resolve(this.beforeFileUpload(formData)).then(function (formData) {
                    formData && xhr.send(formData);
                    formData || console.warn("beforeFileUpload didn't return formData for " + iFile.File.name + " and upload was aborted");
                });
            }
            else {
                xhr.send(formData);
            }
            return pr;
        };
        FileUpload = __decorate([
            core.Injectable()
        ], FileUpload);
        return FileUpload;
    }());

    var FileDroppa = /** @class */ (function () {
        function FileDroppa(filesStore, fileUploadService) {
            var _this = this;
            this.filesStore = filesStore;
            this.fileUploadService = fileUploadService;
            this.showFilesList = true;
            this.autoUpload = false;
            this.beforeRequest = null;
            this.beforeFileUpload = null;
            this.beforeAddFile = null;
            this.dropZoneTemplate = "\n      <div class=\"file_dropZone_internal\">\n          Drop Files Here\n      </div>\n    ";
            this.filesUpdated = new core.EventEmitter(true);
            this.fileUploaded = new core.EventEmitter(true);
            this.uploadButtonTemplate = "\n      <div class=\"file-droppa-btn orange\">\n        <span>Upload All Files</span>\n       </div>\n    ";
            this.removeButtonTemplate = "\n      <div class=\"file-droppa-btn red\">\n        <span>Remove All Files</span>\n       </div>\n    ";
            this.multiple = true;
            filesStore.filesUpdated.subscribe(function () {
                _this.filesUpdated.emit(filesStore.files);
            });
            fileUploadService.fileUploadedEvent.subscribe(function (_a) {
                var _b = __read(_a, 3), success = _b[0], response = _b[1], iFile = _b[2];
                if (success) {
                    _this.filesStore.removeFiles(iFile);
                }
                else {
                    iFile.loadingSuccessful = false;
                    iFile.responseText = false;
                }
                _this.fileUploaded.emit([success, response, iFile.file]);
            });
            filesStore.startAutoUploading = this.startAutoUploading.bind(this);
        }
        Object.defineProperty(FileDroppa.prototype, "url", {
            set: function (tmpUrl) {
                this.fileUploadService.url = tmpUrl;
            },
            enumerable: true,
            configurable: true
        });
        FileDroppa.prototype.startAutoUploading = function (iFile) {
            this.autoUpload && this.fileUploadService.uploadFile(iFile);
        };
        /**
         * We got to pass Input parameters to Service instances
         */
        FileDroppa.prototype.ngOnInit = function () {
            this.filesStore.beforeAddFile = (typeof this.beforeAddFile === "function") ? this.beforeAddFile : function (file) { return true; };
            this.fileUploadService.beforeRequest = this.beforeRequest;
            this.fileUploadService.beforeFileUpload = (typeof this.beforeFileUpload === "function") ? this.beforeFileUpload : function (formData) { return true; };
        };
        FileDroppa.prototype.removeAllFiles = function () {
            this.filesStore.clearStore();
        };
        FileDroppa.prototype.uploadAllFiles = function () {
            this.fileUploadService.uploadFiles(this.filesStore.iFiles);
        };
        FileDroppa.ctorParameters = function () { return [
            { type: FilesStore },
            { type: FileUpload }
        ]; };
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "showFilesList", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "autoUpload", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "beforeRequest", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "url", null);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "beforeFileUpload", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "beforeAddFile", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "dropZoneTemplate", void 0);
        __decorate([
            core.Output()
        ], FileDroppa.prototype, "filesUpdated", void 0);
        __decorate([
            core.Output()
        ], FileDroppa.prototype, "fileUploaded", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "uploadButtonTemplate", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "removeButtonTemplate", void 0);
        __decorate([
            core.Input()
        ], FileDroppa.prototype, "multiple", void 0);
        FileDroppa = __decorate([
            core.Component({
                selector: 'fileDroppa',
                providers: [FilesStore, FileUpload],
                encapsulation: core.ViewEncapsulation.None,
                template: "\n        <div class=\"file-droppa-container\">\n            <fileDropZone [multiple]=\"multiple\">\n                <div [innerHTML]=\"dropZoneTemplate\"></div>\n            </fileDropZone>\n            <br/>\n            <ng-content></ng-content>\n            <fileList *ngIf=\"showFilesList\"></fileList>\n            <div class=\"file-droppa-btns\" *ngIf=\"filesStore.iFiles.length\">\n              <div #uploadButtonArea (click)=\"uploadAllFiles()\">\n                <ng-content select=\"[upload-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"uploadButtonArea.children.length === 0\" (click)=\"uploadAllFiles();\"\n                   [innerHTML]=\"uploadButtonTemplate\"></div>\n              <div #removeButtonArea (click)=\"removeAllFiles();\">\n                <ng-content select=\"[remove-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"removeButtonArea.children.length === 0\" (click)=\"removeAllFiles();\"\n                   [innerHTML]=\"removeButtonTemplate\"></div>\n            </div>\n        </div>\n    ",
                styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "]
            })
        ], FileDroppa);
        return FileDroppa;
    }());

    var File = /** @class */ (function () {
        function File() {
            this.ext = '';
            this.previewSrc = '';
            this.fileName = '';
            //TODO: workaround - depends on strict values;
            this.previewHeight = 75;
            this.removeFile = new core.EventEmitter(true);
        }
        //ngHooks
        File.prototype.ngAfterContentInit = function () {
            this.file && this.getFileType();
        };
        File.prototype.removeFileListener = function (e) {
            e.preventDefault();
            this.removeFile && this.removeFile.emit(true);
        };
        File.prototype.getFileType = function () {
            var _this = this;
            var imageType = /^image\//, reader;
            if (!imageType.test(this.file.type)) {
                var ext = this.file.name.split('.').pop();
                this.fileName = this.file.name;
                this.ext = ext.length > 3
                    ? 'file'
                    : "." + ext;
                return;
            }
            reader = new FileReader();
            reader.addEventListener("load", function () {
                var img = new Image, result = reader.result;
                img.onload = function () {
                    var ratio = img.height / img.width, scaledHeight = ratio * _this.previewHeight;
                    _this.previewSrc = result;
                    _this.previewHeight = (scaledHeight < _this.previewHeight)
                        ? _this.previewHeight
                        : scaledHeight;
                };
                img.src = result;
            }, false);
            if (this.file) {
                reader.readAsDataURL(this.file);
            }
        };
        __decorate([
            core.Input()
        ], File.prototype, "file", void 0);
        __decorate([
            core.Input()
        ], File.prototype, "index", void 0);
        __decorate([
            core.Input()
        ], File.prototype, "percentage", void 0);
        __decorate([
            core.Input()
        ], File.prototype, "loadingSuccessful", void 0);
        __decorate([
            core.Input()
        ], File.prototype, "responseMessage", void 0);
        __decorate([
            core.Output()
        ], File.prototype, "removeFile", void 0);
        File = __decorate([
            core.Component({
                selector: 'fileItem',
                template: "\n        <div *ngIf=\"file\" class=\"file-container\">\n            <div class=\"flex-block file-preview\" [ngStyle]=\"{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight + 'px'}\">\n                <div *ngIf=\"ext\" class=\"flex-block file-preview-ext \">{{ext}}</div>\n                <div *ngIf=\"!previewSrc\" class=\"flex-block file-name\">{{fileName}}</div>\n                <progress [value]=\"percentage\" max=\"100\" class=\"file-progress\"></progress>\n            </div>\n            <div class=\"file-remove\">\n                <span class=\"remove\"><a href=\"#\" (click)=\"removeFileListener($event)\"></a></span>\n            </div>\n            <div *ngIf=\"!loadingSuccessful\" class=\"file-upload-error\">\n                <span class=\"warning\"></span>\n                <span *ngIf=\"responseMessage\" class=\"tooltiptext\">{{responseMessage}}</span>\n            </div>\n            <div class=\"flex-block\">{{file.size | getSize }}</div>\n        </div>\n    ",
                styles: ["\n        .file-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 10px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n            position:relative;\n        }\n\n        .file-container.uploaded {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .flex-block {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n\n        .file-remove {\n            cursor: pointer;\n            position: absolute;\n            left: 87%;\n            top: 8px;\n        }\n        .file-upload-error {\n            position: absolute;\n            top: 8px;\n            left:-8px;\n        }\n        .file-name {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n\n        .file-preview {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n\n         .file-preview-ext {\n            text-transform: uppercase;\n        }\n\n        .file-progress {\n            width: 80%;\n            display: block;\n        }\n\n\n        button {\n            margin: 0;\n        }\n\nspan {\n    position:relative;\n    z-index:1;\n    overflow:hidden;\n    list-style:none;\n    padding:0;\n    margin:0 0 0.25em;\n}\n\nspan a:link {\n    display:block;\n    border:0;\n    padding-left:28px;\n    color:#c55500;\n}\n\nspan a:hover,\nspan a:focus {\n    color:#730800;\n    background:transparent;\n}\n\nspan:before,\nspan:after,\nspan a:before,\nspan a:after {\n    content:\"\";\n    position:absolute;\n    top:50%;\n    left:0;\n}\n\nspan a:before,\nspan a:after {\n    margin:-8px 0 0;\n    background:#c55500;\n}\n\nspan a:hover:before,\nspan a:focus:before {\n    background:#730800;\n}\n\n\n.remove a:before {\n    width:16px;\n    height:16px;\n    /* css3 */\n    -webkit-border-radius:16px;\n    -moz-border-radius:16px;\n    border-radius:16px;\n}\n\n.remove a:after {\n    left:3px;\n    width:10px;\n    height:2px;\n    margin-top:-1px;\n    background:#fff;\n}\n.warning:before {\n    content:\"!\";\n    z-index:2;\n    left:8px;\n    margin-top:-8px;\n    font-size:14px;\n    font-weight:bold;\n    color:#000;\n}\n\n.warning:after {\n    z-index:1;\n    border-width:0 11px 18px;\n    border-style:solid;\n    border-color:#F8D201 transparent;\n    margin-top:-10px;\n    background:transparent;\n}\n\n.file-upload-error .tooltiptext {\n    visibility: hidden;\n    white-space:nowrap;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    /* Position the tooltip text - see examples below! */\n    position: absolute;\n    z-index: 1;\n}\n\n.file-upload-error:hover .tooltiptext {\n    visibility: visible;\n}\n\n    "]
            })
        ], File);
        return File;
    }());

    var FileParser = /** @class */ (function () {
        function FileParser() {
        }
        FileParser.prototype.processFilesFromInput = function (items) {
            var _this = this;
            var newFiles = Object.keys(items).reduce(function (result, key) {
                var entry, item = items[key];
                if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                        result.push(Promise.resolve(item.getAsFile()));
                    }
                    else if (entry.isDirectory) {
                        result.push(_this.processDirectory(entry));
                    }
                }
                else if (item.getAsFile != null) {
                    if ((item.kind == null) || item.kind === "file") {
                        result.push(Promise.resolve(item.getAsFile()));
                    }
                }
                else if (item.isFile) {
                    var pr = new Promise(function (resolve, reject) {
                        item.file(resolve, reject);
                    });
                    result.push(pr);
                }
                else if (item.isDirectory) {
                    result.push(_this.processDirectory(item));
                }
                return result;
            }, []);
            return Promise.all(newFiles).then(this.flattenArrayOfFiles);
        };
        FileParser.prototype.processDirectory = function (directory) {
            var _this = this;
            var dirReader = directory.createReader(), result = [];
            var readEntries = function () {
                return new Promise(function (resolve, reject) {
                    dirReader.readEntries(function (entries) {
                        var pr = [];
                        if (entries.length) {
                            for (var i = 0; i < entries.length; i++) {
                                pr.push(_this.processFilesFromInput({ 0: entries[i] }));
                            }
                        }
                        else {
                            resolve(null);
                        }
                        result.push(readEntries());
                        Promise.all(pr).then(_this.flattenArrayOfFiles).then(resolve);
                    }, function (error) {
                        reject("Error while reading folder");
                    });
                });
            };
            result.push(readEntries());
            return Promise.all(result).then(this.flattenArrayOfFiles);
        };
        FileParser.prototype.processInputFromDrop = function (e) {
            var items = e.dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                return Promise.resolve(this.processFilesFromInput(items));
            }
            else if (items && items.length && !items[0].webkitGetAsEntry) {
                return Promise.resolve(items);
            }
            else if (e.dataTransfer.files) {
                var files = [];
                for (var i = 0, l = e.dataTransfer.files.length; i < l; i++) {
                    files.push(e.dataTransfer.files[i]);
                }
                return Promise.resolve(files);
            }
        };
        FileParser.prototype.flattenArrayOfFiles = function (arrayOfPromises) {
            return Promise.resolve(arrayOfPromises.reduce(function (result, file) {
                if (file) {
                    return __spread(result, [file]);
                }
            }, []));
        };
        FileParser = __decorate([
            core.Injectable()
        ], FileParser);
        return FileParser;
    }());

    var FileDropZone = /** @class */ (function () {
        function FileDropZone(filesStore, el, fileParser) {
            this.filesStore = filesStore;
            this.el = el;
            this.fileParser = fileParser;
            this.hiddenFileInput = null;
            this.promise = null;
            this.createHiddenInput();
        }
        Object.defineProperty(FileDropZone.prototype, "multiple", {
            set: function (value) {
                var attributeName = 'multiple';
                if (value) {
                    this.hiddenFileInput.setAttribute(attributeName, attributeName);
                }
                else {
                    this.hiddenFileInput.removeAttribute(attributeName);
                }
            },
            enumerable: true,
            configurable: true
        });
        /*
         * Host Event Listeners
         * */
        FileDropZone.prototype.onClick = function (e) {
            this.hiddenFileInput && this.hiddenFileInput.click();
        };
        FileDropZone.prototype.drop = function (e) {
            var _this = this;
            e.preventDefault();
            if (!e.dataTransfer || !e.dataTransfer.files.length) {
                return;
            }
            this.promise = this.fileParser.processInputFromDrop(e)
                .then(function (files) {
                _this.updateFilesStore(__spread(files));
            });
            this.updateStyles();
        };
        FileDropZone.prototype.dragenter = function (e) {
            e.preventDefault();
        };
        FileDropZone.prototype.dragover = function (e) {
            e.preventDefault();
            this.updateStyles(true);
        };
        FileDropZone.prototype.dragleave = function (e) {
            e.preventDefault();
            this.updateStyles();
        };
        /*
         * Public methods
         * */
        FileDropZone.prototype.OnDestroy = function () {
            this.hiddenFileInput && document.body.removeChild(this.hiddenFileInput);
            this.hiddenFileInput = null;
        };
        FileDropZone.prototype.updateStyles = function (dragOver) {
            if (dragOver === void 0) { dragOver = false; }
            //this.el.nativeElement.classList[(dragOver) ? 'add' : 'remove'](this._overCls);
        };
        FileDropZone.prototype.updateFilesStore = function (files) {
            this.filesStore.addFiles(files);
        };
        FileDropZone.prototype.createHiddenInput = function () {
            var _this = this;
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
            this.hiddenFileInput.addEventListener("change", function (e) {
                var files = [];
                for (var i = 0, l = e.target.files.length; i < l; i++) {
                    files.push(e.target.files[i]);
                }
                _this.hiddenFileInput.value = "";
                _this.updateFilesStore(files);
            });
        };
        FileDropZone.ctorParameters = function () { return [
            { type: FilesStore },
            { type: core.ElementRef },
            { type: FileParser }
        ]; };
        __decorate([
            core.Input()
        ], FileDropZone.prototype, "multiple", null);
        FileDropZone = __decorate([
            core.Component({
                selector: 'fileDropZone, [fileDropZone]',
                providers: [FileParser],
                template: "\n        <ng-content></ng-content>\n    ",
                host: {
                    '(drop)': 'drop($event)',
                    '(dragenter)': 'dragenter($event)',
                    '(dragover)': 'dragover($event)',
                    '(dragleave)': 'dragleave($event)',
                    '(click)': 'onClick($event)'
                },
                encapsulation: core.ViewEncapsulation.None,
                styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "]
            })
        ], FileDropZone);
        return FileDropZone;
    }());

    var FileList = /** @class */ (function () {
        function FileList(filesStore) {
            this.filesStore = filesStore;
        }
        FileList.prototype.removeFile = function (iFile) {
            this.filesStore.removeFiles(iFile);
        };
        FileList.ctorParameters = function () { return [
            { type: FilesStore }
        ]; };
        FileList = __decorate([
            core.Component({
                selector: 'fileList, [fileList]',
                template: "\n        <div class=\"file-list\">\n            <fileItem *ngFor=\"let file of filesStore.iFiles\"\n                [file]=\"file.File\"\n                [percentage]=\"file.percentage\"\n                [loadingSuccessful]=\"file.loadingSuccessful\"\n                [responseMessage]=\"file.responseMessage\"\n                (removeFile)=\"removeFile(file)\">\n            </fileItem>\n        </div>\n    ",
                styles: ["\n        .file-list {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }\n    "]
            })
        ], FileList);
        return FileList;
    }());

    /*
     * Converts bytes to MB, GB and so on
     * Takes an bytes value argument that defaults to 0.
     * Usage:
     *   value | getSize
     * Example:
     *   {{ 1024 |  getSize}}
     *   formats to: 1 MB
     */
    var GetSizePipe = /** @class */ (function () {
        function GetSizePipe() {
        }
        GetSizePipe.prototype.transform = function (value) {
            var bytes = value || 0, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
            if (bytes === 0) {
                return '0 Byte';
            }
            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
        };
        GetSizePipe = __decorate([
            core.Pipe({ name: 'getSize' })
        ], GetSizePipe);
        return GetSizePipe;
    }());

    var NgxFileDroppaModule = /** @class */ (function () {
        function NgxFileDroppaModule() {
        }
        NgxFileDroppaModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
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
        return NgxFileDroppaModule;
    }());

    exports.NgxFileDroppaModule = NgxFileDroppaModule;
    exports.ɵa = GetSizePipe;
    exports.ɵb = FileDroppa;
    exports.ɵc = FilesStore;
    exports.ɵd = FileUpload;
    exports.ɵe = File;
    exports.ɵf = FileDropZone;
    exports.ɵg = FileParser;
    exports.ɵh = FileList;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-file-droppa.umd.js.map
