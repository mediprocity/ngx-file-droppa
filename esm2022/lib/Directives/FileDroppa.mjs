import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
import * as i0 from "@angular/core";
import * as i1 from "../Services/FileStore.service";
import * as i2 from "../Services/FileUpload.service";
import * as i3 from "@angular/common";
import * as i4 from "./FileDropZone";
import * as i5 from "./FileList";
function FileDroppa_fileList_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fileList");
} }
function FileDroppa_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function FileDroppa_div_6_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.uploadAllFiles()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.uploadButtonTemplate, i0.ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function FileDroppa_div_6_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.removeAllFiles()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r5.removeButtonTemplate, i0.ɵɵsanitizeHtml);
} }
function FileDroppa_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6, 7);
    i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.uploadAllFiles()); });
    i0.ɵɵprojection(3, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FileDroppa_div_6_div_4_Template, 1, 1, "div", 8);
    i0.ɵɵelementStart(5, "div", 6, 9);
    i0.ɵɵlistener("click", function FileDroppa_div_6_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.removeAllFiles()); });
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
    set url(tmpUrl) {
        this.fileUploadService.url = tmpUrl;
    }
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
    static { this.ɵfac = function FileDroppa_Factory(t) { return new (t || FileDroppa)(i0.ɵɵdirectiveInject(i1.FilesStore), i0.ɵɵdirectiveInject(i2.FileUpload)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FileDroppa, selectors: [["fileDroppa"]], inputs: { showFilesList: "showFilesList", autoUpload: "autoUpload", beforeRequest: "beforeRequest", url: "url", beforeFileUpload: "beforeFileUpload", beforeAddFile: "beforeAddFile", dropZoneTemplate: "dropZoneTemplate", uploadButtonTemplate: "uploadButtonTemplate", removeButtonTemplate: "removeButtonTemplate", multiple: "multiple" }, outputs: { filesUpdated: "filesUpdated", fileUploaded: "fileUploaded" }, features: [i0.ɵɵProvidersFeature([FilesStore, FileUpload])], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "file-droppa-container"], [3, "multiple"], [3, "innerHTML"], [4, "ngIf"], ["class", "file-droppa-btns", 4, "ngIf"], [1, "file-droppa-btns"], [3, "click"], ["uploadButtonArea", ""], [3, "innerHTML", "click", 4, "ngIf"], ["removeButtonArea", ""], [3, "innerHTML", "click"]], template: function FileDroppa_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "fileDropZone", 1);
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
        } }, dependencies: [i3.NgIf, i4.FileDropZone, i5.FileList], styles: [".file-droppa-container{width:400px}.file-droppa-btns{display:flex;align-items:center;justify-content:center}.file-droppa-btn{margin:15px;padding:0;overflow:hidden;border-width:0;outline:none;border-radius:2px;box-shadow:0 1px 4px #0009;background-color:#2ecc71;color:#ecf0f1;transition:background-color .3s;width:140px;text-align:center;font-size:12px}.file-droppa-btn:hover{background-color:#27ae60}.file-droppa-btn span{display:block;padding:12px 24px}.file-droppa-btn.orange{background-color:#e67e22}.file-droppa-btn.orange:hover{background-color:#d35400}.file-droppa-btn.red{background-color:#e74c3c}.file-droppa-btn.red:hover{background-color:#c0392b}\n"], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDroppa, [{
        type: Component,
        args: [{ selector: 'fileDroppa', providers: [FilesStore, FileUpload], encapsulation: ViewEncapsulation.None, template: `
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
    `, styles: [".file-droppa-container{width:400px}.file-droppa-btns{display:flex;align-items:center;justify-content:center}.file-droppa-btn{margin:15px;padding:0;overflow:hidden;border-width:0;outline:none;border-radius:2px;box-shadow:0 1px 4px #0009;background-color:#2ecc71;color:#ecf0f1;transition:background-color .3s;width:140px;text-align:center;font-size:12px}.file-droppa-btn:hover{background-color:#27ae60}.file-droppa-btn span{display:block;padding:12px 24px}.file-droppa-btn.orange{background-color:#e67e22}.file-droppa-btn.orange:hover{background-color:#d35400}.file-droppa-btn.red{background-color:#e74c3c}.file-droppa-btn.red:hover{background-color:#c0392b}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3BwYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL0RpcmVjdGl2ZXMvRmlsZURyb3BwYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3hGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0lBc0U5QywyQkFBMkM7Ozs7SUFLekMsK0JBQ3dDO0lBRFksMkpBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFFO0lBQ3ZDLGlCQUFNOzs7SUFBekMsMEVBQWtDOzs7O0lBSXZDLCtCQUN3QztJQURZLDJKQUFTLGVBQUEsdUJBQWdCLENBQUEsSUFBRTtJQUN2QyxpQkFBTTs7O0lBQXpDLDBFQUFrQzs7OztJQVZ6Qyw4QkFBK0QsZ0JBQUE7SUFDdEMsc0pBQVMsZUFBQSx3QkFBZ0IsQ0FBQSxJQUFDO0lBQy9DLHFCQUFrRDtJQUNwRCxpQkFBTTtJQUNOLGlFQUM4QztJQUM5QyxpQ0FBbUQ7SUFBNUIsc0pBQVMsZUFBQSx3QkFBZ0IsQ0FBQSxJQUFFO0lBQ2hELHFCQUFrRDtJQUNwRCxpQkFBTTtJQUNOLGlFQUM4QztJQUNoRCxpQkFBTTs7OztJQVBFLGVBQTRDO0lBQTVDLGdEQUE0QztJQUs1QyxlQUE0QztJQUE1QyxnREFBNEM7Ozs7QUFNaEUsTUFBTSxPQUFPLFVBQVU7SUFJbkIsSUFBYSxHQUFHLENBQUMsTUFBYztRQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBc0JELFlBQW1CLFVBQXFCLEVBQVUsaUJBQTZCO1FBQTVELGVBQVUsR0FBVixV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WSxlQUFxQjtZQUFyQix1Q0FBcUI7WUFDMUIsZUFBOEI7WUFBOUIsbUVBQThCO1lBSTVCLGVBQW1CO1lBQW5CLHdDQUFtQjtZQUNDLGVBQThCO1lBQTlCLG1EQUE4Qjs7O3VGQWU1RCxVQUFVO2NBcEZ0QixTQUFTOzJCQUNJLFlBQVksYUFDWixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsaUJBQ25CLGlCQUFpQixDQUFDLElBQUksWUEwRDNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQlQ7c0ZBR1EsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ08sR0FBRztrQkFBZixLQUFLO1lBR0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUtJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0Usb0JBQW9CO2tCQUE1QixLQUFLO1lBS0csb0JBQW9CO2tCQUE1QixLQUFLO1lBS0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURyb3Bab25lfSBmcm9tICcuL0ZpbGVEcm9wWm9uZSc7XG5pbXBvcnQge0ZpbGVMaXN0fSBmcm9tICcuL0ZpbGVMaXN0JztcbmltcG9ydCB7RmlsZXNTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVTdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGV9IGZyb20gXCIuL0ZpbGVcIjtcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVVcGxvYWQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbGVEcm9wcGEnLFxuICAgIHByb3ZpZGVyczpbRmlsZXNTdG9yZSwgRmlsZVVwbG9hZF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZXM6W2BcbiAgICAgICAgLmZpbGUtZHJvcHBhLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bnMge1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0biB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAuNik7XG5cbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgICAgICAgICAgICAgY29sb3I6ICNlY2YwZjE7XG5cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG46aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4gc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5vcmFuZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjdlMjI7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLm9yYW5nZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNTQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ucmVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5yZWQ6aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZmlsZURyb3Bab25lIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJkcm9wWm9uZVRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2ZpbGVEcm9wWm9uZT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8ZmlsZUxpc3QgKm5nSWY9XCJzaG93RmlsZXNMaXN0XCI+PC9maWxlTGlzdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1idG5zXCIgKm5nSWY9XCJmaWxlc1N0b3JlLmlGaWxlcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgPGRpdiAjdXBsb2FkQnV0dG9uQXJlYSAoY2xpY2spPVwidXBsb2FkQWxsRmlsZXMoKVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1cGxvYWQtYnV0dG9uXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ1cGxvYWRCdXR0b25BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiIChjbGljayk9XCJ1cGxvYWRBbGxGaWxlcygpO1wiXG4gICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJ1cGxvYWRCdXR0b25UZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICNyZW1vdmVCdXR0b25BcmVhIChjbGljayk9XCJyZW1vdmVBbGxGaWxlcygpO1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltyZW1vdmUtYnV0dG9uXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyZW1vdmVCdXR0b25BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiIChjbGljayk9XCJyZW1vdmVBbGxGaWxlcygpO1wiXG4gICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJyZW1vdmVCdXR0b25UZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRmlsZURyb3BwYSB7XG4gICAgQElucHV0KCkgc2hvd0ZpbGVzTGlzdDpib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhdXRvVXBsb2FkOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBiZWZvcmVSZXF1ZXN0OkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBzZXQgdXJsKHRtcFVybDogc3RyaW5nKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLnVybCA9IHRtcFVybDtcbiAgICB9XG4gICAgQElucHV0KCkgYmVmb3JlRmlsZVVwbG9hZDpGdW5jdGlvbiA9IG51bGw7XG4gICAgQElucHV0KCkgYmVmb3JlQWRkRmlsZTpGdW5jdGlvbiA9IG51bGw7XG4gICAgQElucHV0KCkgZHJvcFpvbmVUZW1wbGF0ZTpzdHJpbmcgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZV9kcm9wWm9uZV9pbnRlcm5hbFwiPlxuICAgICAgICAgIERyb3AgRmlsZXMgSGVyZVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBAT3V0cHV0KCkgZmlsZXNVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgICBAT3V0cHV0KCkgZmlsZVVwbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgICBASW5wdXQoKSB1cGxvYWRCdXR0b25UZW1wbGF0ZTpzdHJpbmcgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtYnRuIG9yYW5nZVwiPlxuICAgICAgICA8c3Bhbj5VcGxvYWQgQWxsIEZpbGVzPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgQElucHV0KCkgcmVtb3ZlQnV0dG9uVGVtcGxhdGU6c3RyaW5nID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWJ0biByZWRcIj5cbiAgICAgICAgPHNwYW4+UmVtb3ZlIEFsbCBGaWxlczwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIEBJbnB1dCgpIG11bHRpcGxlOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGZpbGVzU3RvcmU6RmlsZXNTdG9yZSwgcHJpdmF0ZSBmaWxlVXBsb2FkU2VydmljZTogRmlsZVVwbG9hZCl7XG4gICAgICAgIGZpbGVzU3RvcmUuZmlsZXNVcGRhdGVkLnN1YnNjcmliZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5maWxlc1VwZGF0ZWQuZW1pdChmaWxlc1N0b3JlLmZpbGVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGVVcGxvYWRTZXJ2aWNlLmZpbGVVcGxvYWRlZEV2ZW50LnN1YnNjcmliZSgoW3N1Y2Nlc3MsIHJlc3BvbnNlLCBpRmlsZV0pPT57XG4gICAgICAgICAgICBpZihzdWNjZXNzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzU3RvcmUucmVtb3ZlRmlsZXMoaUZpbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpRmlsZS5sb2FkaW5nU3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlGaWxlLnJlc3BvbnNlVGV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkZWQuZW1pdChbc3VjY2VzcywgcmVzcG9uc2UsIGlGaWxlLmZpbGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGVzU3RvcmUuc3RhcnRBdXRvVXBsb2FkaW5nID0gdGhpcy5zdGFydEF1dG9VcGxvYWRpbmcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0QXV0b1VwbG9hZGluZyhpRmlsZSl7XG4gICAgICAgIHRoaXMuYXV0b1VwbG9hZCAmJiB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLnVwbG9hZEZpbGUoaUZpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIGdvdCB0byBwYXNzIElucHV0IHBhcmFtZXRlcnMgdG8gU2VydmljZSBpbnN0YW5jZXNcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuYmVmb3JlQWRkRmlsZSA9ICh0eXBlb2YgdGhpcy5iZWZvcmVBZGRGaWxlPT09XCJmdW5jdGlvblwiKSA/IHRoaXMuYmVmb3JlQWRkRmlsZSA6IChmaWxlKSA9PiB0cnVlO1xuICAgICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLmJlZm9yZVJlcXVlc3QgPSB0aGlzLmJlZm9yZVJlcXVlc3Q7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UuYmVmb3JlRmlsZVVwbG9hZCA9ICh0eXBlb2YgdGhpcy5iZWZvcmVGaWxlVXBsb2FkPT09XCJmdW5jdGlvblwiKSA/IHRoaXMuYmVmb3JlRmlsZVVwbG9hZCA6IChmb3JtRGF0YSkgPT4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxGaWxlcygpIHtcbiAgICAgICAgdGhpcy5maWxlc1N0b3JlLmNsZWFyU3RvcmUoKTtcbiAgICB9XG5cbiAgICB1cGxvYWRBbGxGaWxlcygpIHtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS51cGxvYWRGaWxlcyh0aGlzLmZpbGVzU3RvcmUuaUZpbGVzKTtcbiAgICB9XG59XG4iXX0=