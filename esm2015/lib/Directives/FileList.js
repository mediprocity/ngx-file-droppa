import { Component } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
export class FileList {
    constructor(filesStore) {
        this.filesStore = filesStore;
    }
    removeFile(iFile) {
        this.filesStore.removeFiles(iFile);
    }
}
FileList.decorators = [
    { type: Component, args: [{
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
            },] }
];
FileList.ctorParameters = () => [
    { type: FilesStore }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsZS1kcm9wcGEvc3JjL2xpYi9EaXJlY3RpdmVzL0ZpbGVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQXVELE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQTRCekQsTUFBTSxPQUFPLFFBQVE7SUFDakIsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUN4QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVc7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBOUJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQVVoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVVDt5QkFuQlE7Ozs7Ozs7O0tBUVI7YUFZSjs7O1lBMUJPLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGV9IGZyb20gJy4vRmlsZSc7XG5pbXBvcnQge0ZpbGVzU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlU3RvcmUuc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge2lGaWxlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVdyYXBwZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbGVMaXN0LCBbZmlsZUxpc3RdJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5maWxlLWxpc3Qge1xuICAgICAgICAgICAgd2lkdGg6IDQzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgIH1cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1saXN0XCI+XG4gICAgICAgICAgICA8ZmlsZUl0ZW0gKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNTdG9yZS5pRmlsZXNcIlxuICAgICAgICAgICAgICAgIFtmaWxlXT1cImZpbGUuRmlsZVwiXG4gICAgICAgICAgICAgICAgW3BlcmNlbnRhZ2VdPVwiZmlsZS5wZXJjZW50YWdlXCJcbiAgICAgICAgICAgICAgICBbbG9hZGluZ1N1Y2Nlc3NmdWxdPVwiZmlsZS5sb2FkaW5nU3VjY2Vzc2Z1bFwiXG4gICAgICAgICAgICAgICAgW3Jlc3BvbnNlTWVzc2FnZV09XCJmaWxlLnJlc3BvbnNlTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgKHJlbW92ZUZpbGUpPVwicmVtb3ZlRmlsZShmaWxlKVwiPlxuICAgICAgICAgICAgPC9maWxlSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZXNTdG9yZTpGaWxlc1N0b3JlKXtcbiAgICB9XG5cbiAgICByZW1vdmVGaWxlKGlGaWxlOmlGaWxlKSB7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5yZW1vdmVGaWxlcyhpRmlsZSk7XG4gICAgfVxufVxuIl19