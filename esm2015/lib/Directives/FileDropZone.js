import { __decorate } from "tslib";
import { Component, ElementRef, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FileParser } from "../Services/FileParser.service";
import { FilesStore } from "../Services/FileStore.service";
let FileDropZone = class FileDropZone {
    constructor(filesStore, el, fileParser) {
        this.filesStore = filesStore;
        this.el = el;
        this.fileParser = fileParser;
        this.hiddenFileInput = null;
        this.promise = null;
        this.createHiddenInput();
    }
    set multiple(value) {
        const attributeName = 'multiple';
        if (value) {
            this.hiddenFileInput.setAttribute(attributeName, attributeName);
        }
        else {
            this.hiddenFileInput.removeAttribute(attributeName);
        }
    }
    /*
     * Host Event Listeners
     * */
    onClick(e) {
        this.hiddenFileInput && this.hiddenFileInput.click();
    }
    drop(e) {
        e.preventDefault();
        if (!e.dataTransfer || !e.dataTransfer.files.length) {
            return;
        }
        this.promise = this.fileParser.processInputFromDrop(e)
            .then((files) => {
            this.updateFilesStore([...files]);
        });
        this.updateStyles();
    }
    dragenter(e) {
        e.preventDefault();
    }
    dragover(e) {
        e.preventDefault();
        this.updateStyles(true);
    }
    dragleave(e) {
        e.preventDefault();
        this.updateStyles();
    }
    /*
     * Public methods
     * */
    OnDestroy() {
        this.hiddenFileInput && document.body.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
    }
    updateStyles(dragOver = false) {
        //this.el.nativeElement.classList[(dragOver) ? 'add' : 'remove'](this._overCls);
    }
    updateFilesStore(files) {
        this.filesStore.addFiles(files);
    }
    createHiddenInput() {
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
        this.hiddenFileInput.addEventListener("change", (e) => {
            let files = [];
            for (let i = 0, l = e.target.files.length; i < l; i++) {
                files.push(e.target.files[i]);
            }
            this.hiddenFileInput.value = "";
            this.updateFilesStore(files);
        });
    }
};
FileDropZone.ctorParameters = () => [
    { type: FilesStore },
    { type: ElementRef },
    { type: FileParser }
];
__decorate([
    Input()
], FileDropZone.prototype, "multiple", null);
FileDropZone = __decorate([
    Component({
        selector: 'fileDropZone, [fileDropZone]',
        providers: [FileParser],
        template: `
        <ng-content></ng-content>
    `,
        host: {
            '(drop)': 'drop($event)',
            '(dragenter)': 'dragenter($event)',
            '(dragover)': 'dragover($event)',
            '(dragleave)': 'dragleave($event)',
            '(click)': 'onClick($event)'
        },
        encapsulation: ViewEncapsulation.None,
        styles: [`
        .file_dropZone_internal {
            border: 3px dashed #DDD;
            border-radius:10px;
            padding:10px;
            width:400px;
            height:200px;
            color:#CCC;
            text-align:center;
            display:table-cell;
            vertical-align:middle;
            cursor:pointer;
        }
    `]
    })
], FileDropZone);
export { FileDropZone };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3Bab25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZpbGUtZHJvcHBhLyIsInNvdXJjZXMiOlsibGliL0RpcmVjdGl2ZXMvRmlsZURyb3Bab25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBK0J6RCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBSXJCLFlBQW9CLFVBQXNCLEVBQVUsRUFBYSxFQUFVLFVBQXFCO1FBQTVFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUh4RixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDcEQ7SUFDSCxDQUFDO0lBRUQ7O1NBRUs7SUFFTCxPQUFPLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsSUFBSSxDQUFDLENB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QUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSixDQUFBOztZQXhGbUMsVUFBVTtZQUFhLFVBQVU7WUFBcUIsVUFBVTs7QUFLaEc7SUFEQyxLQUFLLEVBQUU7NENBUVA7QUFoQlEsWUFBWTtJQTdCeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDhCQUE4QjtRQUN4QyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFldkIsUUFBUSxFQUFFOztLQUVUO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsYUFBYSxFQUFFLG1CQUFtQjtZQUNsQyxZQUFZLEVBQUUsa0JBQWtCO1lBQ2hDLGFBQWEsRUFBRSxtQkFBbUI7WUFDbEMsU0FBUyxFQUFFLGlCQUFpQjtTQUMvQjtRQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQXhCNUI7Ozs7Ozs7Ozs7Ozs7S0FhUjtLQVlKLENBQUM7R0FDVyxZQUFZLENBNEZ4QjtTQTVGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlUGFyc2VyfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVBhcnNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVzU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlU3RvcmUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbGVEcm9wWm9uZSwgW2ZpbGVEcm9wWm9uZV0nLFxuICAgIHByb3ZpZGVyczogW0ZpbGVQYXJzZXJdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmZpbGVfZHJvcFpvbmVfaW50ZXJuYWwge1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggZGFzaGVkICNEREQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDoyMDBweDtcbiAgICAgICAgICAgIGNvbG9yOiNDQ0M7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGRyb3ApJzogJ2Ryb3AoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ2VudGVyKSc6ICdkcmFnZW50ZXIoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ292ZXIpJzogJ2RyYWdvdmVyKCRldmVudCknLFxuICAgICAgICAnKGRyYWdsZWF2ZSknOiAnZHJhZ2xlYXZlKCRldmVudCknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCRldmVudCknXG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wWm9uZSB7XG4gICAgcHJpdmF0ZSBoaWRkZW5GaWxlSW5wdXQgPSBudWxsO1xuICAgIHB1YmxpYyBwcm9taXNlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZXNTdG9yZTogRmlsZXNTdG9yZSwgcHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGZpbGVQYXJzZXI6RmlsZVBhcnNlcikge1xuICAgICAgICB0aGlzLmNyZWF0ZUhpZGRlbklucHV0KCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAnbXVsdGlwbGUnO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogSG9zdCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgKiAqL1xuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIHRoaXMuaGlkZGVuRmlsZUlucHV0LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgZHJvcChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFlLmRhdGFUcmFuc2ZlciB8fCAhZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5maWxlUGFyc2VyLnByb2Nlc3NJbnB1dEZyb21Ecm9wKGUpXG4gICAgICAgICAgICAudGhlbigoZmlsZXMpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZXNTdG9yZShbLi4uZmlsZXNdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIGRyYWdlbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGRyYWdvdmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh0cnVlKTtcbiAgICB9XG5cbiAgICBkcmFnbGVhdmUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBQdWJsaWMgbWV0aG9kc1xuICAgICAqICovXG5cbiAgICBPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGVzKGRyYWdPdmVyOmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICAvL3RoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbKGRyYWdPdmVyKSA/ICdhZGQnIDogJ3JlbW92ZSddKHRoaXMuX292ZXJDbHMpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZpbGVzU3RvcmUoZmlsZXM6QXJyYXk8RmlsZT4pOnZvaWQge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuYWRkRmlsZXMoZmlsZXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUhpZGRlbklucHV0KCkge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCAmJiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaGlkZGVuRmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jbGFzc05hbWUgPSBcIl9oaWRkZW5JbnB1dENsYXNzTmFtZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuRmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSk9PiB7XG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlLnRhcmdldC5maWxlcy5sZW5ndGg7aTxsO2krKyl7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzU3RvcmUoZmlsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==