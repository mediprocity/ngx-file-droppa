import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
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
FileDroppa.decorators = [
    { type: Component, args: [{
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
            },] }
];
FileDroppa.ctorParameters = () => [
    { type: FilesStore },
    { type: FileUpload }
];
FileDroppa.propDecorators = {
    showFilesList: [{ type: Input }],
    autoUpload: [{ type: Input }],
    beforeRequest: [{ type: Input }],
    url: [{ type: Input }],
    beforeFileUpload: [{ type: Input }],
    beforeAddFile: [{ type: Input }],
    dropZoneTemplate: [{ type: Input }],
    filesUpdated: [{ type: Output }],
    fileUploaded: [{ type: Output }],
    uploadButtonTemplate: [{ type: Input }],
    removeButtonTemplate: [{ type: Input }],
    multiple: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3BwYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL0RpcmVjdGl2ZXMvRmlsZURyb3BwYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3hGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFzRjFELE1BQU0sT0FBTyxVQUFVO0lBNEJuQixZQUFtQixVQUFxQixFQUFVLGlCQUE2QjtRQUE1RCxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFZO1FBM0J0RSxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixxQkFBZ0IsR0FBVTs7OztLQUlsQyxDQUFDO1FBQ1EsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLHlCQUFvQixHQUFVOzs7O0tBSXRDLENBQUM7UUFDTyx5QkFBb0IsR0FBVTs7OztLQUl0QyxDQUFDO1FBQ08sYUFBUSxHQUFXLElBQUksQ0FBQztRQUc3QixVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFDLEVBQUU7WUFDeEUsSUFBRyxPQUFPLEVBQUM7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztnQkFDaEMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBdENELElBQWEsR0FBRyxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQXNDTyxrQkFBa0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDL0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixLQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdkksQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQW5KSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7Z0JBQ2xDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQTBEckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQlQ7eUJBOUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBdURIO2FBd0JSOzs7WUF2Rk8sVUFBVTtZQUVWLFVBQVU7Ozs0QkF1RmIsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0JBQ0wsS0FBSzsrQkFHTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFLTCxNQUFNOzJCQUNOLE1BQU07bUNBQ04sS0FBSzttQ0FLTCxLQUFLO3VCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVEcm9wWm9uZX0gZnJvbSAnLi9GaWxlRHJvcFpvbmUnO1xuaW1wb3J0IHtGaWxlTGlzdH0gZnJvbSAnLi9GaWxlTGlzdCc7XG5pbXBvcnQge0ZpbGVzU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlU3RvcmUuc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlfSBmcm9tIFwiLi9GaWxlXCI7XG5pbXBvcnQge0ZpbGVVcGxvYWR9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlVXBsb2FkLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWxlRHJvcHBhJyxcbiAgICBwcm92aWRlcnM6W0ZpbGVzU3RvcmUsIEZpbGVVcGxvYWRdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVzOltgXG4gICAgICAgIC5maWxlLWRyb3BwYS1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWxlLWRyb3BwYS1idG5zIHtcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ge1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xuXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWNmMGYxO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuIHNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ub3JhbmdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtZHJvcHBhLWJ0bi5vcmFuZ2U6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzU0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kcm9wcGEtYnRuLnJlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWRyb3BwYS1idG4ucmVkOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgIF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGZpbGVEcm9wWm9uZSBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiZHJvcFpvbmVUZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9maWxlRHJvcFpvbmU+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGZpbGVMaXN0ICpuZ0lmPVwic2hvd0ZpbGVzTGlzdFwiPjwvZmlsZUxpc3Q+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1kcm9wcGEtYnRuc1wiICpuZ0lmPVwiZmlsZXNTdG9yZS5pRmlsZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgIDxkaXYgI3VwbG9hZEJ1dHRvbkFyZWEgKGNsaWNrKT1cInVwbG9hZEFsbEZpbGVzKClcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdXBsb2FkLWJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidXBsb2FkQnV0dG9uQXJlYS5jaGlsZHJlbi5sZW5ndGggPT09IDBcIiAoY2xpY2spPVwidXBsb2FkQWxsRmlsZXMoKTtcIlxuICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwidXBsb2FkQnV0dG9uVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAjcmVtb3ZlQnV0dG9uQXJlYSAoY2xpY2spPVwicmVtb3ZlQWxsRmlsZXMoKTtcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcmVtb3ZlLWJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmVtb3ZlQnV0dG9uQXJlYS5jaGlsZHJlbi5sZW5ndGggPT09IDBcIiAoY2xpY2spPVwicmVtb3ZlQWxsRmlsZXMoKTtcIlxuICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwicmVtb3ZlQnV0dG9uVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wcGEge1xuICAgIEBJbnB1dCgpIHNob3dGaWxlc0xpc3Q6Ym9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgYXV0b1VwbG9hZDpib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYmVmb3JlUmVxdWVzdDpGdW5jdGlvbiA9IG51bGw7XG4gICAgQElucHV0KCkgc2V0IHVybCh0bXBVcmw6IHN0cmluZykge1xuICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS51cmwgPSB0bXBVcmw7XG4gICAgfVxuICAgIEBJbnB1dCgpIGJlZm9yZUZpbGVVcGxvYWQ6RnVuY3Rpb24gPSBudWxsO1xuICAgIEBJbnB1dCgpIGJlZm9yZUFkZEZpbGU6RnVuY3Rpb24gPSBudWxsO1xuICAgIEBJbnB1dCgpIGRyb3Bab25lVGVtcGxhdGU6c3RyaW5nID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImZpbGVfZHJvcFpvbmVfaW50ZXJuYWxcIj5cbiAgICAgICAgICBEcm9wIEZpbGVzIEhlcmVcbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgQE91dHB1dCgpIGZpbGVzVXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICAgQE91dHB1dCgpIGZpbGVVcGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICAgQElucHV0KCkgdXBsb2FkQnV0dG9uVGVtcGxhdGU6c3RyaW5nID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZHJvcHBhLWJ0biBvcmFuZ2VcIj5cbiAgICAgICAgPHNwYW4+VXBsb2FkIEFsbCBGaWxlczwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIEBJbnB1dCgpIHJlbW92ZUJ1dHRvblRlbXBsYXRlOnN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWRyb3BwYS1idG4gcmVkXCI+XG4gICAgICAgIDxzcGFuPlJlbW92ZSBBbGwgRmlsZXM8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBASW5wdXQoKSBtdWx0aXBsZTpib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlc1N0b3JlOkZpbGVzU3RvcmUsIHByaXZhdGUgZmlsZVVwbG9hZFNlcnZpY2U6IEZpbGVVcGxvYWQpe1xuICAgICAgICBmaWxlc1N0b3JlLmZpbGVzVXBkYXRlZC5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgICAgIHRoaXMuZmlsZXNVcGRhdGVkLmVtaXQoZmlsZXNTdG9yZS5maWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWxlVXBsb2FkU2VydmljZS5maWxlVXBsb2FkZWRFdmVudC5zdWJzY3JpYmUoKFtzdWNjZXNzLCByZXNwb25zZSwgaUZpbGVdKT0+e1xuICAgICAgICAgICAgaWYoc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc1N0b3JlLnJlbW92ZUZpbGVzKGlGaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaUZpbGUubG9hZGluZ1N1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpRmlsZS5yZXNwb25zZVRleHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkLmVtaXQoW3N1Y2Nlc3MsIHJlc3BvbnNlLCBpRmlsZS5maWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWxlc1N0b3JlLnN0YXJ0QXV0b1VwbG9hZGluZyA9IHRoaXMuc3RhcnRBdXRvVXBsb2FkaW5nLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEF1dG9VcGxvYWRpbmcoaUZpbGUpe1xuICAgICAgICB0aGlzLmF1dG9VcGxvYWQgJiYgdGhpcy5maWxlVXBsb2FkU2VydmljZS51cGxvYWRGaWxlKGlGaWxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBnb3QgdG8gcGFzcyBJbnB1dCBwYXJhbWV0ZXJzIHRvIFNlcnZpY2UgaW5zdGFuY2VzXG4gICAgICovXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5maWxlc1N0b3JlLmJlZm9yZUFkZEZpbGUgPSAodHlwZW9mIHRoaXMuYmVmb3JlQWRkRmlsZT09PVwiZnVuY3Rpb25cIikgPyB0aGlzLmJlZm9yZUFkZEZpbGUgOiAoZmlsZSkgPT4gdHJ1ZTtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkU2VydmljZS5iZWZvcmVSZXF1ZXN0ID0gdGhpcy5iZWZvcmVSZXF1ZXN0O1xuICAgICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLmJlZm9yZUZpbGVVcGxvYWQgPSAodHlwZW9mIHRoaXMuYmVmb3JlRmlsZVVwbG9hZD09PVwiZnVuY3Rpb25cIikgPyB0aGlzLmJlZm9yZUZpbGVVcGxvYWQgOiAoZm9ybURhdGEpID0+IHRydWU7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsRmlsZXMoKSB7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5jbGVhclN0b3JlKCk7XG4gICAgfVxuXG4gICAgdXBsb2FkQWxsRmlsZXMoKSB7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UudXBsb2FkRmlsZXModGhpcy5maWxlc1N0b3JlLmlGaWxlcyk7XG4gICAgfVxufVxuIl19