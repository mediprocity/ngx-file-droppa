import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
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
        Component({
            selector: 'fileList, [fileList]',
            template: "\n        <div class=\"file-list\">\n            <fileItem *ngFor=\"let file of filesStore.iFiles\"\n                [file]=\"file.File\"\n                [percentage]=\"file.percentage\"\n                [loadingSuccessful]=\"file.loadingSuccessful\"\n                [responseMessage]=\"file.responseMessage\"\n                (removeFile)=\"removeFile(file)\">\n            </fileItem>\n        </div>\n    ",
            styles: ["\n        .file-list {\n            width: 430px;\n            margin-bottom: 5px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }\n    "]
        })
    ], FileList);
    return FileList;
}());
export { FileList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmlsZS1kcm9wcGEvIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9GaWxlTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBdUQsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBNEJ6RDtJQUNJLGtCQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO0lBQ3hDLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsS0FBVztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFMNkIsVUFBVTs7SUFEL0IsUUFBUTtRQXhCcEIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQVVoQyxRQUFRLEVBQUUsNFpBVVQ7cUJBbkJRLDBNQVFSO1NBWUosQ0FBQztPQUVXLFFBQVEsQ0FPcEI7SUFBRCxlQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZX0gZnJvbSAnLi9GaWxlJztcbmltcG9ydCB7RmlsZXNTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVTdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVVcGxvYWR9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlVXBsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7aUZpbGV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZUxpc3QsIFtmaWxlTGlzdF0nLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmZpbGUtbGlzdCB7XG4gICAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgfVxuICAgIGBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWxpc3RcIj5cbiAgICAgICAgICAgIDxmaWxlSXRlbSAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1N0b3JlLmlGaWxlc1wiXG4gICAgICAgICAgICAgICAgW2ZpbGVdPVwiZmlsZS5GaWxlXCJcbiAgICAgICAgICAgICAgICBbcGVyY2VudGFnZV09XCJmaWxlLnBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgIFtsb2FkaW5nU3VjY2Vzc2Z1bF09XCJmaWxlLmxvYWRpbmdTdWNjZXNzZnVsXCJcbiAgICAgICAgICAgICAgICBbcmVzcG9uc2VNZXNzYWdlXT1cImZpbGUucmVzcG9uc2VNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAocmVtb3ZlRmlsZSk9XCJyZW1vdmVGaWxlKGZpbGUpXCI+XG4gICAgICAgICAgICA8L2ZpbGVJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlc1N0b3JlOkZpbGVzU3RvcmUpe1xuICAgIH1cblxuICAgIHJlbW92ZUZpbGUoaUZpbGU6aUZpbGUpIHtcbiAgICAgICAgdGhpcy5maWxlc1N0b3JlLnJlbW92ZUZpbGVzKGlGaWxlKTtcbiAgICB9XG59XG4iXX0=