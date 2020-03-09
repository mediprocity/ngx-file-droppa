import { __decorate, __read } from "tslib";
import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
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
        this.filesUpdated = new EventEmitter(true);
        this.fileUploaded = new EventEmitter(true);
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
            template: "\n        <div class=\"file-droppa-container\">\n            <fileDropZone [multiple]=\"multiple\">\n                <div [innerHTML]=\"dropZoneTemplate\"></div>\n            </fileDropZone>\n            <br/>\n            <ng-content></ng-content>\n            <fileList *ngIf=\"showFilesList\"></fileList>\n            <div class=\"file-droppa-btns\" *ngIf=\"filesStore.iFiles.length\">\n              <div #uploadButtonArea (click)=\"uploadAllFiles()\">\n                <ng-content select=\"[upload-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"uploadButtonArea.children.length === 0\" (click)=\"uploadAllFiles();\"\n                   [innerHTML]=\"uploadButtonTemplate\"></div>\n              <div #removeButtonArea (click)=\"removeAllFiles();\">\n                <ng-content select=\"[remove-button]\"></ng-content>\n              </div>\n              <div *ngIf=\"removeButtonArea.children.length === 0\" (click)=\"removeAllFiles();\"\n                   [innerHTML]=\"removeButtonTemplate\"></div>\n            </div>\n        </div>\n    ",
            styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "]
        })
    ], FileDroppa);
    return FileDroppa;
}());
export { FileDroppa };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3BwYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1maWxlLWRyb3BwYS8iLCJzb3VyY2VzIjpbImxpYi9EaXJlY3RpdmVzL0ZpbGVEcm9wcGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHeEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRXpELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNGMUQ7SUE0Qkksb0JBQW1CLFVBQXFCLEVBQVUsaUJBQTZCO1FBQS9FLGlCQWNDO1FBZGtCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7UUEzQnRFLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFJOUIscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHFCQUFnQixHQUFVLCtGQUlsQyxDQUFDO1FBQ1EsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLHlCQUFvQixHQUFVLDRHQUl0QyxDQUFDO1FBQ08seUJBQW9CLEdBQVUseUdBSXRDLENBQUM7UUFDTyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBRzdCLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILGlCQUFpQixDQUFDLGlCQUFpQixD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QWhFRCxJQWdFQztTQWhFWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRHJvcFpvbmV9IGZyb20gJy4vRmlsZURyb3Bab25lJztcbmltcG9ydCB7RmlsZUxpc3R9IGZyb20gJy4vRmlsZUxpc3QnO1xuaW1wb3J0IHtGaWxlc1N0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZX0gZnJvbSBcIi4vRmlsZVwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZURyb3BwYScsXG4gICAgcHJvdmlkZXJzOltGaWxlc1N0b3JlLCBGaWxlVXBsb2FkXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlczpbYFxuICAgICAgICAuZmlsZS1kcm9wcGEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRucyB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcblxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICAgICAgICAgICAgICBjb2xvcjogI2VjZjBmMTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0biBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLm9yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ub3JhbmdlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLnJlZDpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmaWxlRHJvcFpvbmUgW211bHRpcGxlXT1cIm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImRyb3Bab25lVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZmlsZURyb3Bab25lPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxmaWxlTGlzdCAqbmdJZj1cInNob3dGaWxlc0xpc3RcIj48L2ZpbGVMaXN0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWJ0bnNcIiAqbmdJZj1cImZpbGVzU3RvcmUuaUZpbGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICA8ZGl2ICN1cGxvYWRCdXR0b25BcmVhIChjbGljayk9XCJ1cGxvYWRBbGxGaWxlcygpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3VwbG9hZC1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVwbG9hZEJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInVwbG9hZEFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInVwbG9hZEJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgI3JlbW92ZUJ1dHRvbkFyZWEgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3JlbW92ZS1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlbW92ZUJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInJlbW92ZUJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcHBhIHtcbiAgICBASW5wdXQoKSBzaG93RmlsZXNMaXN0OmJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9VcGxvYWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJlZm9yZVJlcXVlc3Q6RnVuY3Rpb24gPSBudWxsO1xuICAgIEBJbnB1dCgpIHNldCB1cmwodG1wVXJsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXJsID0gdG1wVXJsO1xuICAgIH1cbiAgICBASW5wdXQoKSBiZWZvcmVGaWxlVXBsb2FkOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBiZWZvcmVBZGRGaWxlOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBkcm9wWm9uZVRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlX2Ryb3Bab25lX2ludGVybmFsXCI+XG4gICAgICAgICAgRHJvcCBGaWxlcyBIZXJlXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIEBPdXRwdXQoKSBmaWxlc1VwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBPdXRwdXQoKSBmaWxlVXBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBJbnB1dCgpIHVwbG9hZEJ1dHRvblRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1idG4gb3JhbmdlXCI+XG4gICAgICAgIDxzcGFuPlVwbG9hZCBBbGwgRmlsZXM8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBASW5wdXQoKSByZW1vdmVCdXR0b25UZW1wbGF0ZTpzdHJpbmcgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtYnRuIHJlZFwiPlxuICAgICAgICA8c3Bhbj5SZW1vdmUgQWxsIEZpbGVzPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgQElucHV0KCkgbXVsdGlwbGU6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZXNTdG9yZTpGaWxlc1N0b3JlLCBwcml2YXRlIGZpbGVVcGxvYWRTZXJ2aWNlOiBGaWxlVXBsb2FkKXtcbiAgICAgICAgZmlsZXNTdG9yZS5maWxlc1VwZGF0ZWQuc3Vic2NyaWJlKCgpPT57XG4gICAgICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KGZpbGVzU3RvcmUuZmlsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZVVwbG9hZFNlcnZpY2UuZmlsZVVwbG9hZGVkRXZlbnQuc3Vic2NyaWJlKChbc3VjY2VzcywgcmVzcG9uc2UsIGlGaWxlXSk9PntcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNTdG9yZS5yZW1vdmVGaWxlcyhpRmlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlGaWxlLmxvYWRpbmdTdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaUZpbGUucmVzcG9uc2VUZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KFtzdWNjZXNzLCByZXNwb25zZSwgaUZpbGUuZmlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZXNTdG9yZS5zdGFydEF1dG9VcGxvYWRpbmcgPSB0aGlzLnN0YXJ0QXV0b1VwbG9hZGluZy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRBdXRvVXBsb2FkaW5nKGlGaWxlKXtcbiAgICAgICAgdGhpcy5hdXRvVXBsb2FkICYmIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXBsb2FkRmlsZShpRmlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgZ290IHRvIHBhc3MgSW5wdXQgcGFyYW1ldGVycyB0byBTZXJ2aWNlIGluc3RhbmNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5iZWZvcmVBZGRGaWxlID0gKHR5cGVvZiB0aGlzLmJlZm9yZUFkZEZpbGU9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVBZGRGaWxlIDogKGZpbGUpID0+IHRydWU7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UuYmVmb3JlUmVxdWVzdCA9IHRoaXMuYmVmb3JlUmVxdWVzdDtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS5iZWZvcmVGaWxlVXBsb2FkID0gKHR5cGVvZiB0aGlzLmJlZm9yZUZpbGVVcGxvYWQ9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVGaWxlVXBsb2FkIDogKGZvcm1EYXRhKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuY2xlYXJTdG9yZSgpO1xuICAgIH1cblxuICAgIHVwbG9hZEFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLnVwbG9hZEZpbGVzKHRoaXMuZmlsZXNTdG9yZS5pRmlsZXMpO1xuICAgIH1cbn1cbiJdfQ==