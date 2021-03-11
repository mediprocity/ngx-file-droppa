(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-file-droppa', ['exports', '@angular/common', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-file-droppa'] = {}, global.ng.common, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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
            this.filesUpdated = new i0.EventEmitter(true);
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
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FilesStore.prototype, "iFiles", {
            get: function () {
                return this._iFiles;
            },
            set: function (files) {
                this._iFiles = files;
            },
            enumerable: false,
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
        return FilesStore;
    }());
    FilesStore.ɵfac = function FilesStore_Factory(t) { return new (t || FilesStore)(); };
    FilesStore.ɵprov = i0.ɵɵdefineInjectable({ token: FilesStore, factory: FilesStore.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilesStore, [{
                type: i0.Injectable
            }], null, null);
    })();

    var FileUpload = /** @class */ (function () {
        function FileUpload() {
            this.zone = new i0.NgZone({ enableLongStackTrace: false });
            this.url = null;
            this.beforeRequest = null;
            this.beforeFileUpload = null;
            this.fileUploadedEvent = new i0.EventEmitter(true);
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
        return FileUpload;
    }());
    FileUpload.ɵfac = function FileUpload_Factory(t) { return new (t || FileUpload)(); };
    FileUpload.ɵprov = i0.ɵɵdefineInjectable({ token: FileUpload, factory: FileUpload.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileUpload, [{
                type: i0.Injectable
            }], null, null);
    })();

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
        return FileParser;
    }());
    FileParser.ɵfac = function FileParser_Factory(t) { return new (t || FileParser)(); };
    FileParser.ɵprov = i0.ɵɵdefineInjectable({ token: FileParser, factory: FileParser.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileParser, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$2 = ["*"];
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
            enumerable: false,
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
        return FileDropZone;
    }());
    FileDropZone.ɵfac = function FileDropZone_Factory(t) { return new (t || FileDropZone)(i0.ɵɵdirectiveInject(FilesStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FileParser)); };
    FileDropZone.ɵcmp = i0.ɵɵdefineComponent({ type: FileDropZone, selectors: [["fileDropZone"], ["", "fileDropZone", ""]], hostBindings: function FileDropZone_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("drop", function FileDropZone_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function FileDropZone_dragenter_HostBindingHandler($event) { return ctx.dragenter($event); })("dragover", function FileDropZone_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("dragleave", function FileDropZone_dragleave_HostBindingHandler($event) { return ctx.dragleave($event); })("click", function FileDropZone_click_HostBindingHandler($event) { return ctx.onClick($event); });
            }
        }, inputs: { multiple: "multiple" }, features: [i0.ɵɵProvidersFeature([FileParser])], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function FileDropZone_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDropZone, [{
                type: i0.Component,
                args: [{
                        selector: 'fileDropZone, [fileDropZone]',
                        providers: [FileParser],
                        styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "],
                        template: "\n        <ng-content></ng-content>\n    ",
                        host: {
                            '(drop)': 'drop($event)',
                            '(dragenter)': 'dragenter($event)',
                            '(dragover)': 'dragover($event)',
                            '(dragleave)': 'dragleave($event)',
                            '(click)': 'onClick($event)'
                        },
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: FilesStore }, { type: i0.ElementRef }, { type: FileParser }]; }, { multiple: [{
                    type: i0.Input
                }] });
    })();

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
        return GetSizePipe;
    }());
    GetSizePipe.ɵfac = function GetSizePipe_Factory(t) { return new (t || GetSizePipe)(); };
    GetSizePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "getSize", type: GetSizePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GetSizePipe, [{
                type: i0.Pipe,
                args: [{ name: 'getSize' }]
            }], null, null);
    })();

    function File_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 11);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.ext);
        }
    }
    function File_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.fileName);
        }
    }
    function File_div_0_div_8_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 16);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r4.responseMessage);
        }
    }
    function File_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelement(1, "span", 14);
            i0.ɵɵtemplate(2, File_div_0_div_8_span_2_Template, 2, 1, "span", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r3.responseMessage);
        }
    }
    var _c0$1 = function (a0, a1) { return { "background-image": a0, "height": a1 }; };
    function File_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, File_div_0_div_2_Template, 2, 1, "div", 3);
            i0.ɵɵtemplate(3, File_div_0_div_3_Template, 2, 1, "div", 4);
            i0.ɵɵelement(4, "progress", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 6);
            i0.ɵɵelementStart(6, "span", 7);
            i0.ɵɵelementStart(7, "a", 8);
            i0.ɵɵlistener("click", function File_div_0_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.removeFileListener($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, File_div_0_div_8_Template, 3, 1, "div", 9);
            i0.ɵɵelementStart(9, "div", 10);
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "getSize");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(8, _c0$1, "url(" + ctx_r0.previewSrc + ")", ctx_r0.previewHeight + "px"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.ext);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.previewSrc);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r0.percentage);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx_r0.loadingSuccessful);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 6, ctx_r0.file.size));
        }
    }
    var File = /** @class */ (function () {
        function File() {
            this.ext = '';
            this.previewSrc = '';
            this.fileName = '';
            //TODO: workaround - depends on strict values;
            this.previewHeight = 75;
            this.removeFile = new i0.EventEmitter(true);
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
        return File;
    }());
    File.ɵfac = function File_Factory(t) { return new (t || File)(); };
    File.ɵcmp = i0.ɵɵdefineComponent({ type: File, selectors: [["fileItem"]], inputs: { file: "file", index: "index", percentage: "percentage", loadingSuccessful: "loadingSuccessful", responseMessage: "responseMessage" }, outputs: { removeFile: "removeFile" }, decls: 1, vars: 1, consts: [["class", "file-container", 4, "ngIf"], [1, "file-container"], [1, "flex-block", "file-preview", 3, "ngStyle"], ["class", "flex-block file-preview-ext ", 4, "ngIf"], ["class", "flex-block file-name", 4, "ngIf"], ["max", "100", 1, "file-progress", 3, "value"], [1, "file-remove"], [1, "remove"], ["href", "#", 3, "click"], ["class", "file-upload-error", 4, "ngIf"], [1, "flex-block"], [1, "flex-block", "file-preview-ext"], [1, "flex-block", "file-name"], [1, "file-upload-error"], [1, "warning"], ["class", "tooltiptext", 4, "ngIf"], [1, "tooltiptext"]], template: function File_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, File_div_0_Template, 12, 11, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.file);
            }
        }, directives: [i1.NgIf, i1.NgStyle], pipes: [GetSizePipe], styles: [".file-container[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 10px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n            position:relative;\n        }\n\n        .file-container.uploaded[_ngcontent-%COMP%] {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .flex-block[_ngcontent-%COMP%] {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n\n        .file-remove[_ngcontent-%COMP%] {\n            cursor: pointer;\n            position: absolute;\n            left: 87%;\n            top: 8px;\n        }\n        .file-upload-error[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 8px;\n            left:-8px;\n        }\n        .file-name[_ngcontent-%COMP%] {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n\n        .file-preview[_ngcontent-%COMP%] {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n\n         .file-preview-ext[_ngcontent-%COMP%] {\n            text-transform: uppercase;\n        }\n\n        .file-progress[_ngcontent-%COMP%] {\n            width: 80%;\n            display: block;\n        }\n\n\n        button[_ngcontent-%COMP%] {\n            margin: 0;\n        }\n\nspan[_ngcontent-%COMP%] {\n    position:relative;\n    z-index:1;\n    overflow:hidden;\n    list-style:none;\n    padding:0;\n    margin:0 0 0.25em;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link {\n    display:block;\n    border:0;\n    padding-left:28px;\n    color:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color:#730800;\n    background:transparent;\n}\n\nspan[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]:after, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    content:\"\";\n    position:absolute;\n    top:50%;\n    left:0;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    margin:-8px 0 0;\n    background:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:before {\n    background:#730800;\n}\n\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    width:16px;\n    height:16px;\n    \n    -webkit-border-radius:16px;\n    -moz-border-radius:16px;\n    border-radius:16px;\n}\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    left:3px;\n    width:10px;\n    height:2px;\n    margin-top:-1px;\n    background:#fff;\n}\n.warning[_ngcontent-%COMP%]:before {\n    content:\"!\";\n    z-index:2;\n    left:8px;\n    margin-top:-8px;\n    font-size:14px;\n    font-weight:bold;\n    color:#000;\n}\n\n.warning[_ngcontent-%COMP%]:after {\n    z-index:1;\n    border-width:0 11px 18px;\n    border-style:solid;\n    border-color:#F8D201 transparent;\n    margin-top:-10px;\n    background:transparent;\n}\n\n.file-upload-error[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: hidden;\n    white-space:nowrap;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    \n    position: absolute;\n    z-index: 1;\n}\n\n.file-upload-error[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: visible;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(File, [{
                type: i0.Component,
                args: [{
                        selector: 'fileItem',
                        styles: ["\n        .file-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 10px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n            position:relative;\n        }\n\n        .file-container.uploaded {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .flex-block {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n\n        .file-remove {\n            cursor: pointer;\n            position: absolute;\n            left: 87%;\n            top: 8px;\n        }\n        .file-upload-error {\n            position: absolute;\n            top: 8px;\n            left:-8px;\n        }\n        .file-name {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n\n        .file-preview {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n\n         .file-preview-ext {\n            text-transform: uppercase;\n        }\n\n        .file-progress {\n            width: 80%;\n            display: block;\n        }\n\n\n        button {\n            margin: 0;\n        }\n\nspan {\n    position:relative;\n    z-index:1;\n    overflow:hidden;\n    list-style:none;\n    padding:0;\n    margin:0 0 0.25em;\n}\n\nspan a:link {\n    display:block;\n    border:0;\n    padding-left:28px;\n    color:#c55500;\n}\n\nspan a:hover,\nspan a:focus {\n    color:#730800;\n    background:transparent;\n}\n\nspan:before,\nspan:after,\nspan a:before,\nspan a:after {\n    content:\"\";\n    position:absolute;\n    top:50%;\n    left:0;\n}\n\nspan a:before,\nspan a:after {\n    margin:-8px 0 0;\n    background:#c55500;\n}\n\nspan a:hover:before,\nspan a:focus:before {\n    background:#730800;\n}\n\n\n.remove a:before {\n    width:16px;\n    height:16px;\n    /* css3 */\n    -webkit-border-radius:16px;\n    -moz-border-radius:16px;\n    border-radius:16px;\n}\n\n.remove a:after {\n    left:3px;\n    width:10px;\n    height:2px;\n    margin-top:-1px;\n    background:#fff;\n}\n.warning:before {\n    content:\"!\";\n    z-index:2;\n    left:8px;\n    margin-top:-8px;\n    font-size:14px;\n    font-weight:bold;\n    color:#000;\n}\n\n.warning:after {\n    z-index:1;\n    border-width:0 11px 18px;\n    border-style:solid;\n    border-color:#F8D201 transparent;\n    margin-top:-10px;\n    background:transparent;\n}\n\n.file-upload-error .tooltiptext {\n    visibility: hidden;\n    white-space:nowrap;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    /* Position the tooltip text - see examples below! */\n    position: absolute;\n    z-index: 1;\n}\n\n.file-upload-error:hover .tooltiptext {\n    visibility: visible;\n}\n\n    "],
                        template: "\n        <div *ngIf=\"file\" class=\"file-container\">\n            <div class=\"flex-block file-preview\" [ngStyle]=\"{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight + 'px'}\">\n                <div *ngIf=\"ext\" class=\"flex-block file-preview-ext \">{{ext}}</div>\n                <div *ngIf=\"!previewSrc\" class=\"flex-block file-name\">{{fileName}}</div>\n                <progress [value]=\"percentage\" max=\"100\" class=\"file-progress\"></progress>\n            </div>\n            <div class=\"file-remove\">\n                <span class=\"remove\"><a href=\"#\" (click)=\"removeFileListener($event)\"></a></span>\n            </div>\n            <div *ngIf=\"!loadingSuccessful\" class=\"file-upload-error\">\n                <span class=\"warning\"></span>\n                <span *ngIf=\"responseMessage\" class=\"tooltiptext\">{{responseMessage}}</span>\n            </div>\n            <div class=\"flex-block\">{{file.size | getSize }}</div>\n        </div>\n    "
                    }]
            }], null, { file: [{
                    type: i0.Input
                }], index: [{
                    type: i0.Input
                }], percentage: [{
                    type: i0.Input
                }], loadingSuccessful: [{
                    type: i0.Input
                }], responseMessage: [{
                    type: i0.Input
                }], removeFile: [{
                    type: i0.Output
                }] });
    })();

    function FileList_fileItem_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "fileItem", 2);
            i0.ɵɵlistener("removeFile", function FileList_fileItem_1_Template_fileItem_removeFile_0_listener() { i0.ɵɵrestoreView(_r3_1); var file_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.removeFile(file_r1); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var file_r1 = ctx.$implicit;
            i0.ɵɵproperty("file", file_r1.File)("percentage", file_r1.percentage)("loadingSuccessful", file_r1.loadingSuccessful)("responseMessage", file_r1.responseMessage);
        }
    }
    var FileList = /** @class */ (function () {
        function FileList(filesStore) {
            this.filesStore = filesStore;
        }
        FileList.prototype.removeFile = function (iFile) {
            this.filesStore.removeFiles(iFile);
        };
        return FileList;
    }());
    FileList.ɵfac = function FileList_Factory(t) { return new (t || FileList)(i0.ɵɵdirectiveInject(FilesStore)); };
    FileList.ɵcmp = i0.ɵɵdefineComponent({ type: FileList, selectors: [["fileList"], ["", "fileList", ""]], decls: 2, vars: 1, consts: [[1, "file-list"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile", 4, "ngFor", "ngForOf"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile"]], template: function FileList_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, FileList_fileItem_1_Template, 1, 4, "fileItem", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.filesStore.iFiles);
            }
        }, directives: [i1.NgForOf, File], styles: [".file-list[_ngcontent-%COMP%] {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileList, [{
                type: i0.Component,
                args: [{
                        selector: 'fileList, [fileList]',
                        styles: ["\n        .file-list {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }\n    "],
                        template: "\n        <div class=\"file-list\">\n            <fileItem *ngFor=\"let file of filesStore.iFiles\"\n                [file]=\"file.File\"\n                [percentage]=\"file.percentage\"\n                [loadingSuccessful]=\"file.loadingSuccessful\"\n                [responseMessage]=\"file.responseMessage\"\n                (removeFile)=\"removeFile(file)\">\n            </fileItem>\n        </div>\n    "
                    }]
            }], function () { return [{ type: FilesStore }]; }, null);
    })();

    function FileDroppa_fileList_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "fileList");
        }
    }
    function FileDroppa_div_6_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵlistener("click", function FileDroppa_div_6_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.uploadAllFiles(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("innerHTML", ctx_r3.uploadButtonTemplate, i0.ɵɵsanitizeHtml);
        }
    }
    function FileDroppa_div_6_div_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵlistener("click", function FileDroppa_div_6_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.removeAllFiles(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("innerHTML", ctx_r5.removeButtonTemplate, i0.ɵɵsanitizeHtml);
        }
    }
    function FileDroppa_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵelementStart(1, "div", 6, 7);
            i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.uploadAllFiles(); });
            i0.ɵɵprojection(3, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, FileDroppa_div_6_div_4_Template, 1, 1, "div", 8);
            i0.ɵɵelementStart(5, "div", 6, 9);
            i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeAllFiles(); });
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, FileDroppa_div_6_div_8_Template, 1, 1, "div", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r2 = i0.ɵɵreference(2);
            var _r4 = i0.ɵɵreference(6);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", _r2.children.length === 0);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", _r4.children.length === 0);
        }
    }
    var _c0 = ["*", [["", "upload-button", ""]], [["", "remove-button", ""]]];
    var _c1 = ["*", "[upload-button]", "[remove-button]"];
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
            this.filesUpdated = new i0.EventEmitter(true);
            this.fileUploaded = new i0.EventEmitter(true);
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
            enumerable: false,
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
        return FileDroppa;
    }());
    FileDroppa.ɵfac = function FileDroppa_Factory(t) { return new (t || FileDroppa)(i0.ɵɵdirectiveInject(FilesStore), i0.ɵɵdirectiveInject(FileUpload)); };
    FileDroppa.ɵcmp = i0.ɵɵdefineComponent({ type: FileDroppa, selectors: [["fileDroppa"]], inputs: { showFilesList: "showFilesList", autoUpload: "autoUpload", beforeRequest: "beforeRequest", url: "url", beforeFileUpload: "beforeFileUpload", beforeAddFile: "beforeAddFile", dropZoneTemplate: "dropZoneTemplate", uploadButtonTemplate: "uploadButtonTemplate", removeButtonTemplate: "removeButtonTemplate", multiple: "multiple" }, outputs: { filesUpdated: "filesUpdated", fileUploaded: "fileUploaded" }, features: [i0.ɵɵProvidersFeature([FilesStore, FileUpload])], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "file-droppa-container"], [3, "multiple"], [3, "innerHTML"], [4, "ngIf"], ["class", "file-droppa-btns", 4, "ngIf"], [1, "file-droppa-btns"], [3, "click"], ["uploadButtonArea", ""], [3, "innerHTML", "click", 4, "ngIf"], ["removeButtonArea", ""], [3, "innerHTML", "click"]], template: function FileDroppa_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0);
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "fileDropZone", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "br");
                i0.ɵɵprojection(4);
                i0.ɵɵtemplate(5, FileDroppa_fileList_5_Template, 1, 0, "fileList", 3);
                i0.ɵɵtemplate(6, FileDroppa_div_6_Template, 9, 2, "div", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("multiple", ctx.multiple);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("innerHTML", ctx.dropZoneTemplate, i0.ɵɵsanitizeHtml);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.showFilesList);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.filesStore.iFiles.length);
            }
        }, directives: [FileDropZone, i1.NgIf, FileList], styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDroppa, [{
                type: i0.Component,
                args: [{
                        selector: 'fileDroppa',
                        providers: [FilesStore, FileUpload],
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "
                        ],
                        template: "\n        <div class=\"file-droppa-container\">\n            <fileDropZone [multiple]=\"multiple\">\n                <div [innerHTML]=\"dropZoneTemplate\"></div>\n            </fileDropZone>\n            <br/>\n            <ng-content></ng-content>\n            <fileList *ngIf=\"showFilesList\"></fileList>\n            <div class=\"file-droppa-btns\" *ngIf=\"filesStore.iFiles.length\">\n              <div #uploadButtonArea (click)=\"uploadAllFiles()\">\n                <ng-content select=\"[upload-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"uploadButtonArea.children.length === 0\" (click)=\"uploadAllFiles();\"\n                   [innerHTML]=\"uploadButtonTemplate\"></div>\n              <div #removeButtonArea (click)=\"removeAllFiles();\">\n                <ng-content select=\"[remove-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"removeButtonArea.children.length === 0\" (click)=\"removeAllFiles();\"\n                   [innerHTML]=\"removeButtonTemplate\"></div>\n            </div>\n        </div>\n    "
                    }]
            }], function () { return [{ type: FilesStore }, { type: FileUpload }]; }, { showFilesList: [{
                    type: i0.Input
                }], autoUpload: [{
                    type: i0.Input
                }], beforeRequest: [{
                    type: i0.Input
                }], url: [{
                    type: i0.Input
                }], beforeFileUpload: [{
                    type: i0.Input
                }], beforeAddFile: [{
                    type: i0.Input
                }], dropZoneTemplate: [{
                    type: i0.Input
                }], filesUpdated: [{
                    type: i0.Output
                }], fileUploaded: [{
                    type: i0.Output
                }], uploadButtonTemplate: [{
                    type: i0.Input
                }], removeButtonTemplate: [{
                    type: i0.Input
                }], multiple: [{
                    type: i0.Input
                }] });
    })();

    var NgxFileDroppaModule = /** @class */ (function () {
        function NgxFileDroppaModule() {
        }
        return NgxFileDroppaModule;
    }());
    NgxFileDroppaModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxFileDroppaModule });
    NgxFileDroppaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxFileDroppaModule_Factory(t) { return new (t || NgxFileDroppaModule)(); }, imports: [[
                i1.CommonModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFileDroppaModule, { declarations: [GetSizePipe,
                FileDroppa,
                File,
                FileDropZone,
                FileList], imports: [i1.CommonModule], exports: [FileDroppa,
                File,
                FileDropZone,
                FileList] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFileDroppaModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
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
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-file-droppa
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.File = File;
    exports.FileDropZone = FileDropZone;
    exports.FileDroppa = FileDroppa;
    exports.FileList = FileList;
    exports.NgxFileDroppaModule = NgxFileDroppaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-file-droppa.umd.js.map
