import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
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
export { FileDroppa };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3BwYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1maWxlLWRyb3BwYS8iLCJzb3VyY2VzIjpbImxpYi9EaXJlY3RpdmVzL0ZpbGVEcm9wcGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHeEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRXpELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNGMUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQTRCbkIsWUFBbUIsVUFBcUIsRUFBVSxpQkFBNkI7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtRQTNCdEUsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUk5QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIscUJBQWdCLEdBQVU7Ozs7S0FJbEMsQ0FBQztRQUNRLGlCQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2Qyx5QkFBb0IsR0FBVTs7OztLQUl0QyxDQUFDO1FBQ08seUJBQW9CLEdBQVU7Ozs7S0FJdEMsQ0FBQztRQUNPLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHN0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMs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O1NBdURIO0tBd0JSLENBQUM7R0FDVyxVQUFVLENBZ0V0QjtTQWhFWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRHJvcFpvbmV9IGZyb20gJy4vRmlsZURyb3Bab25lJztcbmltcG9ydCB7RmlsZUxpc3R9IGZyb20gJy4vRmlsZUxpc3QnO1xuaW1wb3J0IHtGaWxlc1N0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZX0gZnJvbSBcIi4vRmlsZVwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZURyb3BwYScsXG4gICAgcHJvdmlkZXJzOltGaWxlc1N0b3JlLCBGaWxlVXBsb2FkXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlczpbYFxuICAgICAgICAuZmlsZS1kcm9wcGEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRucyB7XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIC42KTtcblxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICAgICAgICAgICAgICBjb2xvcjogI2VjZjBmMTtcblxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0biBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLm9yYW5nZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ub3JhbmdlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM1NDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLnJlZDpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmaWxlRHJvcFpvbmUgW211bHRpcGxlXT1cIm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImRyb3Bab25lVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZmlsZURyb3Bab25lPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxmaWxlTGlzdCAqbmdJZj1cInNob3dGaWxlc0xpc3RcIj48L2ZpbGVMaXN0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWJ0bnNcIiAqbmdJZj1cImZpbGVzU3RvcmUuaUZpbGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICA8ZGl2ICN1cGxvYWRCdXR0b25BcmVhIChjbGljayk9XCJ1cGxvYWRBbGxGaWxlcygpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3VwbG9hZC1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVwbG9hZEJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInVwbG9hZEFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInVwbG9hZEJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgI3JlbW92ZUJ1dHRvbkFyZWEgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3JlbW92ZS1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlbW92ZUJ1dHRvbkFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cInJlbW92ZUFsbEZpbGVzKCk7XCJcbiAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInJlbW92ZUJ1dHRvblRlbXBsYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcHBhIHtcbiAgICBASW5wdXQoKSBzaG93RmlsZXNMaXN0OmJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9VcGxvYWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGJlZm9yZVJlcXVlc3Q6RnVuY3Rpb24gPSBudWxsO1xuICAgIEBJbnB1dCgpIHNldCB1cmwodG1wVXJsOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXJsID0gdG1wVXJsO1xuICAgIH1cbiAgICBASW5wdXQoKSBiZWZvcmVGaWxlVXBsb2FkOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBiZWZvcmVBZGRGaWxlOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBASW5wdXQoKSBkcm9wWm9uZVRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlX2Ryb3Bab25lX2ludGVybmFsXCI+XG4gICAgICAgICAgRHJvcCBGaWxlcyBIZXJlXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIEBPdXRwdXQoKSBmaWxlc1VwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBPdXRwdXQoKSBmaWxlVXBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIEBJbnB1dCgpIHVwbG9hZEJ1dHRvblRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1idG4gb3JhbmdlXCI+XG4gICAgICAgIDxzcGFuPlVwbG9hZCBBbGwgRmlsZXM8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBASW5wdXQoKSByZW1vdmVCdXR0b25UZW1wbGF0ZTpzdHJpbmcgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtYnRuIHJlZFwiPlxuICAgICAgICA8c3Bhbj5SZW1vdmUgQWxsIEZpbGVzPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgQElucHV0KCkgbXVsdGlwbGU6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZXNTdG9yZTpGaWxlc1N0b3JlLCBwcml2YXRlIGZpbGVVcGxvYWRTZXJ2aWNlOiBGaWxlVXBsb2FkKXtcbiAgICAgICAgZmlsZXNTdG9yZS5maWxlc1VwZGF0ZWQuc3Vic2NyaWJlKCgpPT57XG4gICAgICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KGZpbGVzU3RvcmUuZmlsZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZVVwbG9hZFNlcnZpY2UuZmlsZVVwbG9hZGVkRXZlbnQuc3Vic2NyaWJlKChbc3VjY2VzcywgcmVzcG9uc2UsIGlGaWxlXSk9PntcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNTdG9yZS5yZW1vdmVGaWxlcyhpRmlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlGaWxlLmxvYWRpbmdTdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaUZpbGUucmVzcG9uc2VUZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KFtzdWNjZXNzLCByZXNwb25zZSwgaUZpbGUuZmlsZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsZXNTdG9yZS5zdGFydEF1dG9VcGxvYWRpbmcgPSB0aGlzLnN0YXJ0QXV0b1VwbG9hZGluZy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRBdXRvVXBsb2FkaW5nKGlGaWxlKXtcbiAgICAgICAgdGhpcy5hdXRvVXBsb2FkICYmIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXBsb2FkRmlsZShpRmlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgZ290IHRvIHBhc3MgSW5wdXQgcGFyYW1ldGVycyB0byBTZXJ2aWNlIGluc3RhbmNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5iZWZvcmVBZGRGaWxlID0gKHR5cGVvZiB0aGlzLmJlZm9yZUFkZEZpbGU9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVBZGRGaWxlIDogKGZpbGUpID0+IHRydWU7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UuYmVmb3JlUmVxdWVzdCA9IHRoaXMuYmVmb3JlUmVxdWVzdDtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS5iZWZvcmVGaWxlVXBsb2FkID0gKHR5cGVvZiB0aGlzLmJlZm9yZUZpbGVVcGxvYWQ9PT1cImZ1bmN0aW9uXCIpID8gdGhpcy5iZWZvcmVGaWxlVXBsb2FkIDogKGZvcm1EYXRhKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuY2xlYXJTdG9yZSgpO1xuICAgIH1cblxuICAgIHVwbG9hZEFsbEZpbGVzKCkge1xuICAgICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLnVwbG9hZEZpbGVzKHRoaXMuZmlsZXNTdG9yZS5pRmlsZXMpO1xuICAgIH1cbn1cbiJdfQ==