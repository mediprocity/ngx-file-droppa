import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../Services/FileStore.service";
import * as i2 from "@angular/common";
import * as i3 from "./File";
function FileList_fileItem_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fileItem", 2);
    i0.ɵɵlistener("removeFile", function FileList_fileItem_1_Template_fileItem_removeFile_0_listener() { i0.ɵɵrestoreView(_r3); const file_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.removeFile(file_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    i0.ɵɵproperty("file", file_r1.File)("percentage", file_r1.percentage)("loadingSuccessful", file_r1.loadingSuccessful)("responseMessage", file_r1.responseMessage);
} }
export class FileList {
    constructor(filesStore) {
        this.filesStore = filesStore;
    }
    removeFile(iFile) {
        this.filesStore.removeFiles(iFile);
    }
}
FileList.ɵfac = function FileList_Factory(t) { return new (t || FileList)(i0.ɵɵdirectiveInject(i1.FilesStore)); };
FileList.ɵcmp = i0.ɵɵdefineComponent({ type: FileList, selectors: [["fileList"], ["", "fileList", ""]], decls: 2, vars: 1, consts: [[1, "file-list"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile", 4, "ngFor", "ngForOf"], [3, "file", "percentage", "loadingSuccessful", "responseMessage", "removeFile"]], template: function FileList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, FileList_fileItem_1_Template, 1, 4, "fileItem", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.filesStore.iFiles);
    } }, directives: [i2.NgForOf, i3.File], styles: [".file-list[_ngcontent-%COMP%] {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileList, [{
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
    }], function () { return [{ type: i1.FilesStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsZS1kcm9wcGEvc3JjL2xpYi9EaXJlY3RpdmVzL0ZpbGVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQXVELE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBbUJsRixtQ0FLb0M7SUFBaEMsbU9BQStCO0lBQ25DLGlCQUFXOzs7SUFMUCxtQ0FBa0Isa0NBQUEsZ0RBQUEsNENBQUE7O0FBVWxDLE1BQU0sT0FBTyxRQUFRO0lBQ2pCLFlBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dFQU5RLFFBQVE7NkNBQVIsUUFBUTtRQVpiLDhCQUF1QjtRQUNuQixtRUFNVztRQUNmLGlCQUFNOztRQVB5QixlQUFvQjtRQUFwQiwrQ0FBb0I7O3VGQVc5QyxRQUFRO2NBeEJwQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O0tBUVIsQ0FBQztnQkFDRixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVVDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlfSBmcm9tICcuL0ZpbGUnO1xuaW1wb3J0IHtGaWxlc1N0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVVcGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtpRmlsZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVXcmFwcGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWxlTGlzdCwgW2ZpbGVMaXN0XScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuZmlsZS1saXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiA0MzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbGlzdFwiPlxuICAgICAgICAgICAgPGZpbGVJdGVtICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzU3RvcmUuaUZpbGVzXCJcbiAgICAgICAgICAgICAgICBbZmlsZV09XCJmaWxlLkZpbGVcIlxuICAgICAgICAgICAgICAgIFtwZXJjZW50YWdlXT1cImZpbGUucGVyY2VudGFnZVwiXG4gICAgICAgICAgICAgICAgW2xvYWRpbmdTdWNjZXNzZnVsXT1cImZpbGUubG9hZGluZ1N1Y2Nlc3NmdWxcIlxuICAgICAgICAgICAgICAgIFtyZXNwb25zZU1lc3NhZ2VdPVwiZmlsZS5yZXNwb25zZU1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIChyZW1vdmVGaWxlKT1cInJlbW92ZUZpbGUoZmlsZSlcIj5cbiAgICAgICAgICAgIDwvZmlsZUl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWxlTGlzdCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGZpbGVzU3RvcmU6RmlsZXNTdG9yZSl7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsZShpRmlsZTppRmlsZSkge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUucmVtb3ZlRmlsZXMoaUZpbGUpO1xuICAgIH1cbn1cbiJdfQ==