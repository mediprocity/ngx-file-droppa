import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
import * as i0 from "@angular/core";
import * as i1 from "../Services/FileStore.service";
import * as i2 from "../Services/FileUpload.service";
import * as i3 from "./FileDropZone";
import * as i4 from "@angular/common";
import * as i5 from "./FileList";
function FileDroppa_fileList_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fileList");
} }
function FileDroppa_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function FileDroppa_div_6_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.uploadAllFiles(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.uploadButtonTemplate, i0.ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function FileDroppa_div_6_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.removeAllFiles(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r5.removeButtonTemplate, i0.ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6, 7);
    i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.uploadAllFiles(); });
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FileDroppa_div_6_div_4_Template, 1, 1, "div", 8);
    i0.ɵɵelementStart(5, "div", 6, 9);
    i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.removeAllFiles(); });
    i0.ɵɵprojection(7, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, FileDroppa_div_6_div_8_Template, 1, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(2);
    const _r4 = i0.ɵɵreference(6);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r2.children.length === 0);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r4.children.length === 0);
} }
const _c0 = ["*", [["", "upload-button", ""]], [["", "remove-button", ""]]];
const _c1 = ["*", "[upload-button]", "[remove-button]"];
export class FileDroppa {
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
FileDroppa.ɵfac = function FileDroppa_Factory(t) { return new (t || FileDroppa)(i0.ɵɵdirectiveInject(i1.FilesStore), i0.ɵɵdirectiveInject(i2.FileUpload)); };
FileDroppa.ɵcmp = i0.ɵɵdefineComponent({ type: FileDroppa, selectors: [["fileDroppa"]], inputs: { showFilesList: "showFilesList", autoUpload: "autoUpload", beforeRequest: "beforeRequest", url: "url", beforeFileUpload: "beforeFileUpload", beforeAddFile: "beforeAddFile", dropZoneTemplate: "dropZoneTemplate", uploadButtonTemplate: "uploadButtonTemplate", removeButtonTemplate: "removeButtonTemplate", multiple: "multiple" }, outputs: { filesUpdated: "filesUpdated", fileUploaded: "fileUploaded" }, features: [i0.ɵɵProvidersFeature([FilesStore, FileUpload])], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "file-droppa-container"], [3, "multiple"], [3, "innerHTML"], [4, "ngIf"], ["class", "file-droppa-btns", 4, "ngIf"], [1, "file-droppa-btns"], [3, "click"], ["uploadButtonArea", ""], [3, "innerHTML", "click", 4, "ngIf"], ["removeButtonArea", ""], [3, "innerHTML", "click"]], template: function FileDroppa_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("multiple", ctx.multiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", ctx.dropZoneTemplate, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showFilesList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filesStore.iFiles.length);
    } }, directives: [i3.FileDropZone, i4.NgIf, i5.FileList], styles: ["\n        .file-droppa-container {\n            width: 400px;\n        }\n        .file-droppa-btns {\n         display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n        .file-droppa-btn {\n              margin: 15px;\n              padding: 0;\n\n              overflow: hidden;\n\n              border-width: 0;\n              outline: none;\n              border-radius: 2px;\n              box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n\n              background-color: #2ecc71;\n              color: #ecf0f1;\n\n              transition: background-color .3s;\n              width: 140px;\n              text-align: center;\n              font-size: 12px;\n\n        }\n\n        .file-droppa-btn:hover{\n          background-color: #27ae60;\n        }\n\n        .file-droppa-btn span {\n          display: block;\n          padding: 12px 24px;\n        }\n\n        .file-droppa-btn.orange {\n          background-color: #e67e22;\n        }\n\n        .file-droppa-btn.orange:hover {\n          background-color: #d35400;\n        }\n\n        .file-droppa-btn.red {\n          background-color: #e74c3c;\n        }\n\n        .file-droppa-btn.red:hover{\n          background-color: #c0392b;\n        }\n        "], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDroppa, [{
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
    }], function () { return [{ type: i1.FilesStore }, { type: i2.FileUpload }]; }, { showFilesList: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3BwYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL0RpcmVjdGl2ZXMvRmlsZURyb3BwYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3hGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0lBc0U5QywyQkFBMkM7Ozs7SUFLekMsK0JBQ3dDO0lBRFksc0xBQTJCO0lBQ3ZDLGlCQUFNOzs7SUFBekMsMEVBQWtDOzs7O0lBSXZDLCtCQUN3QztJQURZLHNMQUEyQjtJQUN2QyxpQkFBTTs7O0lBQXpDLDBFQUFrQzs7OztJQVZ6Qyw4QkFBK0Q7SUFDN0QsaUNBQWtEO0lBQTNCLGtMQUEwQjtJQUMvQyxxQkFBa0Q7SUFDcEQsaUJBQU07SUFDTixpRUFDOEM7SUFDOUMsaUNBQW1EO0lBQTVCLGtMQUEyQjtJQUNoRCxxQkFBa0Q7SUFDcEQsaUJBQU07SUFDTixpRUFDOEM7SUFDaEQsaUJBQU07Ozs7SUFQRSxlQUE0QztJQUE1QyxnREFBNEM7SUFLNUMsZUFBNEM7SUFBNUMsZ0RBQTRDOzs7O0FBTWhFLE1BQU0sT0FBTyxVQUFVO0lBNEJuQixZQUFtQixVQUFxQixFQUFVLGlCQUE2QjtRQUE1RCxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFZO1FBM0J0RSxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxrQkFBYSxH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QW1CO1FBQ0MsZUFBOEI7UUFBOUIsbURBQThCOzt1RkFlNUQsVUFBVTtjQXBGdEIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUNsQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1REg7aUJBQ0o7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQlQ7YUFDSjtzRkFFWSxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDTyxHQUFHO2tCQUFmLEtBQUs7WUFHRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBS0ksWUFBWTtrQkFBckIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRSxvQkFBb0I7a0JBQTVCLEtBQUs7WUFLRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFLRyxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRHJvcFpvbmV9IGZyb20gJy4vRmlsZURyb3Bab25lJztcbmltcG9ydCB7RmlsZUxpc3R9IGZyb20gJy4vRmlsZUxpc3QnO1xuaW1wb3J0IHtGaWxlc1N0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZX0gZnJvbSBcIi4vRmlsZVwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZURyb3BwYScsXG4gICAgcHJvdmlkZXJzOltGaWxlc1N0b3JlLCBGaWxlVXBsb2FkXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlczpbYFxuICAgICAgICAuZmlsZS1kcm9wcGEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRucyB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcblxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICAgICAgICAgICAgICBjb2xvcjogI2VjZjBmMTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0biBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLm9yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ub3JhbmdlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLnJlZDpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmaWxlRHJvcFpvbmUgW211bHRpcGxlXT1cIm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImRyb3Bab25lVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZmlsZURyb3Bab25lPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxmaWxlTGlzdCAqbmdJZj1cInNob3dGaWxlc0xpc3RcIj48L2ZpbGVMaXN0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWJ0bnNcIiAqbmdJZj1cImZpbGVzU3RvcmUuaUZpbGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICA8ZGl2ICN1cGxvYWRCdXR0b25BcmVhIChjbGljayk9XCJ1cGxvYWRBbGxGaWxlcygpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3VwbG9hZC1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVwbG9hZEJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInVwbG9hZEFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInVwbG9hZEJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgI3JlbW92ZUJ1dHRvbkFyZWEgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3JlbW92ZS1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlbW92ZUJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInJlbW92ZUJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcHBhIHtcbiAgICBASW5wdXQoKSBzaG93RmlsZXNMaXN0OmJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9VcGxvYWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJlZm9yZVJlcXVlc3Q6RnVuY3Rpb24gPSBudWxsO1xuICAgIEBJbnB1dCgpIHNldCB1cmwodG1wVXJsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXJsID0gdG1wVXJsO1xuICAgIH1cbiAgICBASW5wdXQoKSBiZWZvcmVGaWxlVXBsb2FkOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBiZWZvcmVBZGRGaWxlOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBkcm9wWm9uZVRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlX2Ryb3Bab25lX2ludGVybmFsXCI+XG4gICAgICAgICAgRHJvcCBGaWxlcyBIZXJlXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIEBPdXRwdXQoKSBmaWxlc1VwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBPdXRwdXQoKSBmaWxlVXBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBJbnB1dCgpIHVwbG9hZEJ1dHRvblRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1idG4gb3JhbmdlXCI+XG4gICAgICAgIDxzcGFuPlVwbG9hZCBBbGwgRmlsZXM8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBASW5wdXQoKSByZW1vdmVCdXR0b25UZW1wbGF0ZTpzdHJpbmcgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtYnRuIHJlZFwiPlxuICAgICAgICA8c3Bhbj5SZW1vdmUgQWxsIEZpbGVzPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgQElucHV0KCkgbXVsdGlwbGU6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZXNTdG9yZTpGaWxlc1N0b3JlLCBwcml2YXRlIGZpbGVVcGxvYWRTZXJ2aWNlOiBGaWxlVXBsb2FkKXtcbiAgICAgICAgZmlsZXNTdG9yZS5maWxlc1VwZGF0ZWQuc3Vic2NyaWJlKCgpPT57XG4gICAgICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KGZpbGVzU3RvcmUuZmlsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZVVwbG9hZFNlcnZpY2UuZmlsZVVwbG9hZGVkRXZlbnQuc3Vic2NyaWJlKChbc3VjY2VzcywgcmVzcG9uc2UsIGlGaWxlXSk9PntcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNTdG9yZS5yZW1vdmVGaWxlcyhpRmlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlGaWxlLmxvYWRpbmdTdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaUZpbGUucmVzcG9uc2VUZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KFtzdWNjZXNzLCByZXNwb25zZSwgaUZpbGUuZmlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZXNTdG9yZS5zdGFydEF1dG9VcGxvYWRpbmcgPSB0aGlzLnN0YXJ0QXV0b1VwbG9hZGluZy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRBdXRvVXBsb2FkaW5nKGlGaWxlKXtcbiAgICAgICAgdGhpcy5hdXRvVXBsb2FkICYmIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXBsb2FkRmlsZShpRmlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgZ290IHRvIHBhc3MgSW5wdXQgcGFyYW1ldGVycyB0byBTZXJ2aWNlIGluc3RhbmNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5iZWZvcmVBZGRGaWxlID0gKHR5cGVvZiB0aGlzLmJlZm9yZUFkZEZpbGU9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVBZGRGaWxlIDogKGZpbGUpID0+IHRydWU7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UuYmVmb3JlUmVxdWVzdCA9IHRoaXMuYmVmb3JlUmVxdWVzdDtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS5iZWZvcmVGaWxlVXBsb2FkID0gKHR5cGVvZiB0aGlzLmJlZm9yZUZpbGVVcGxvYWQ9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVGaWxlVXBsb2FkIDogKGZvcm1EYXRhKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuY2xlYXJTdG9yZSgpO1xuICAgIH1cblxuICAgIHVwbG9hZEFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLnVwbG9hZEZpbGVzKHRoaXMuZmlsZXNTdG9yZS5pRmlsZXMpO1xuICAgIH1cbn1cbiJdfQ==