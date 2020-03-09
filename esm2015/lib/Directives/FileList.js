import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
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
export { FileList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmlsZS1kcm9wcGEvIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9GaWxlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBdUQsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBNEJ6RCxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFRO0lBQ2pCLFlBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSixDQUFBOztZQU5pQyxVQUFVOztBQUQvQixRQUFRO0lBeEJwQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsc0JBQXNCO1FBVWhDLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVUO2lCQW5CUTs7Ozs7Ozs7S0FRUjtLQVlKLENBQUM7R0FFVyxRQUFRLENBT3BCO1NBUFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZX0gZnJvbSAnLi9GaWxlJztcbmltcG9ydCB7RmlsZXNTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVTdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVVcGxvYWR9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlVXBsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7aUZpbGV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZUxpc3QsIFtmaWxlTGlzdF0nLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmZpbGUtbGlzdCB7XG4gICAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgfVxuICAgIGBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWxpc3RcIj5cbiAgICAgICAgICAgIDxmaWxlSXRlbSAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1N0b3JlLmlGaWxlc1wiXG4gICAgICAgICAgICAgICAgW2ZpbGVdPVwiZmlsZS5GaWxlXCJcbiAgICAgICAgICAgICAgICBbcGVyY2VudGFnZV09XCJmaWxlLnBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgIFtsb2FkaW5nU3VjY2Vzc2Z1bF09XCJmaWxlLmxvYWRpbmdTdWNjZXNzZnVsXCJcbiAgICAgICAgICAgICAgICBbcmVzcG9uc2VNZXNzYWdlXT1cImZpbGUucmVzcG9uc2VNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAocmVtb3ZlRmlsZSk9XCJyZW1vdmVGaWxlKGZpbGUpXCI+XG4gICAgICAgICAgICA8L2ZpbGVJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlc1N0b3JlOkZpbGVzU3RvcmUpe1xuICAgIH1cblxuICAgIHJlbW92ZUZpbGUoaUZpbGU6aUZpbGUpIHtcbiAgICAgICAgdGhpcy5maWxlc1N0b3JlLnJlbW92ZUZpbGVzKGlGaWxlKTtcbiAgICB9XG59XG4iXX0=