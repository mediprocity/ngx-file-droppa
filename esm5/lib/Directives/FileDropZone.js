import { __decorate, __read, __spread } from "tslib";
import { Component, ElementRef, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FileParser } from "../Services/FileParser.service";
import { FilesStore } from "../Services/FileStore.service";
var FileDropZone = /** @class */ (function () {
    function FileDropZone(filesStore, el, fileParser) {
        this.filesStore = filesStore;
        this.el = el;
        this.fileParser = fileParser;
        this.hiddenFileInput = null;
        this.promise = null;
        this.createHiddenInput();
    }
    Object.defineProperty(FileDropZone.prototype, "multiple", {
        set: function (value) {
            var attributeName = 'multiple';
            if (value) {
                this.hiddenFileInput.setAttribute(attributeName, attributeName);
            }
            else {
                this.hiddenFileInput.removeAttribute(attributeName);
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Host Event Listeners
     * */
    FileDropZone.prototype.onClick = function (e) {
        this.hiddenFileInput && this.hiddenFileInput.click();
    };
    FileDropZone.prototype.drop = function (e) {
        var _this = this;
        e.preventDefault();
        if (!e.dataTransfer || !e.dataTransfer.files.length) {
            return;
        }
        this.promise = this.fileParser.processInputFromDrop(e)
            .then(function (files) {
            _this.updateFilesStore(__spread(files));
        });
        this.updateStyles();
    };
    FileDropZone.prototype.dragenter = function (e) {
        e.preventDefault();
    };
    FileDropZone.prototype.dragover = function (e) {
        e.preventDefault();
        this.updateStyles(true);
    };
    FileDropZone.prototype.dragleave = function (e) {
        e.preventDefault();
        this.updateStyles();
    };
    /*
     * Public methods
     * */
    FileDropZone.prototype.OnDestroy = function () {
        this.hiddenFileInput && document.body.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
    };
    FileDropZone.prototype.updateStyles = function (dragOver) {
        if (dragOver === void 0) { dragOver = false; }
        //this.el.nativeElement.classList[(dragOver) ? 'add' : 'remove'](this._overCls);
    };
    FileDropZone.prototype.updateFilesStore = function (files) {
        this.filesStore.addFiles(files);
    };
    FileDropZone.prototype.createHiddenInput = function () {
        var _this = this;
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
        this.hiddenFileInput.addEventListener("change", function (e) {
            var files = [];
            for (var i = 0, l = e.target.files.length; i < l; i++) {
                files.push(e.target.files[i]);
            }
            _this.hiddenFileInput.value = "";
            _this.updateFilesStore(files);
        });
    };
    FileDropZone.ctorParameters = function () { return [
        { type: FilesStore },
        { type: ElementRef },
        { type: FileParser }
    ]; };
    __decorate([
        Input()
    ], FileDropZone.prototype, "multiple", null);
    FileDropZone = __decorate([
        Component({
            selector: 'fileDropZone, [fileDropZone]',
            providers: [FileParser],
            template: "\n        <ng-content></ng-content>\n    ",
            host: {
                '(drop)': 'drop($event)',
                '(dragenter)': 'dragenter($event)',
                '(dragover)': 'dragover($event)',
                '(dragleave)': 'dragleave($event)',
                '(click)': 'onClick($event)'
            },
            encapsulation: ViewEncapsulation.None,
            styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "]
        })
    ], FileDropZone);
    return FileDropZone;
}());
export { FileDropZone };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3Bab25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZpbGUtZHJvcHBhLyIsInNvdXJjZXMiOlsibGliL0RpcmVjdGl2ZXMvRmlsZURyb3Bab25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBK0J6RDtJQUlJLHNCQUFvQixVQUFzQixFQUFVLEVBQWEsRUFBVSxVQUFxQjtRQUE1RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFIeEYsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBR0Qsc0JBQUksa0NBQVE7YUFBWixVQUFhLEtBQWM7WUFDekIsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDO1lBQ2pDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNqRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUNwRDtRQUNILENBQUM7OztPQUFBO0lBRUQ7O1NBRUs7SUFFTCw4QkFBTyxHQUFQLFVBQVEsQ0FBQztRQUNMLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFL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QUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXRGK0IsVUFBVTtnQkFBYSxVQUFVO2dCQUFxQixVQUFVOztJQUtoRztRQURDLEtBQUssRUFBRTtnREFRUDtJQWhCUSxZQUFZO1FBN0J4QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQWV2QixRQUFRLEVBQUUsMkNBRVQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGFBQWEsRUFBRSxtQkFBbUI7Z0JBQ2xDLFlBQVksRUFBRSxrQkFBa0I7Z0JBQ2hDLGFBQWEsRUFBRSxtQkFBbUI7Z0JBQ2xDLFNBQVMsRUFBRSxpQkFBaUI7YUFDL0I7WUFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtxQkF4QjVCLHdXQWFSO1NBWUosQ0FBQztPQUNXLFlBQVksQ0E0RnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQTVGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlUGFyc2VyfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVBhcnNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVzU3RvcmV9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlU3RvcmUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZpbGVEcm9wWm9uZSwgW2ZpbGVEcm9wWm9uZV0nLFxuICAgIHByb3ZpZGVyczogW0ZpbGVQYXJzZXJdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmZpbGVfZHJvcFpvbmVfaW50ZXJuYWwge1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggZGFzaGVkICNEREQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDoyMDBweDtcbiAgICAgICAgICAgIGNvbG9yOiNDQ0M7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGRyb3ApJzogJ2Ryb3AoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ2VudGVyKSc6ICdkcmFnZW50ZXIoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ292ZXIpJzogJ2RyYWdvdmVyKCRldmVudCknLFxuICAgICAgICAnKGRyYWdsZWF2ZSknOiAnZHJhZ2xlYXZlKCRldmVudCknLFxuICAgICAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCRldmVudCknXG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVEcm9wWm9uZSB7XG4gICAgcHJpdmF0ZSBoaWRkZW5GaWxlSW5wdXQgPSBudWxsO1xuICAgIHB1YmxpYyBwcm9taXNlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZXNTdG9yZTogRmlsZXNTdG9yZSwgcHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGZpbGVQYXJzZXI6RmlsZVBhcnNlcikge1xuICAgICAgICB0aGlzLmNyZWF0ZUhpZGRlbklucHV0KCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSAnbXVsdGlwbGUnO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogSG9zdCBFdmVudCBMaXN0ZW5lcnNcbiAgICAgKiAqL1xuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIHRoaXMuaGlkZGVuRmlsZUlucHV0LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgZHJvcChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFlLmRhdGFUcmFuc2ZlciB8fCAhZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9taXNlID0gdGhpcy5maWxlUGFyc2VyLnByb2Nlc3NJbnB1dEZyb21Ecm9wKGUpXG4gICAgICAgICAgICAudGhlbigoZmlsZXMpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZXNTdG9yZShbLi4uZmlsZXNdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIGRyYWdlbnRlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGRyYWdvdmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh0cnVlKTtcbiAgICB9XG5cbiAgICBkcmFnbGVhdmUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBQdWJsaWMgbWV0aG9kc1xuICAgICAqICovXG5cbiAgICBPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGVzKGRyYWdPdmVyOmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICAvL3RoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3RbKGRyYWdPdmVyKSA/ICdhZGQnIDogJ3JlbW92ZSddKHRoaXMuX292ZXJDbHMpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZpbGVzU3RvcmUoZmlsZXM6QXJyYXk8RmlsZT4pOnZvaWQge1xuICAgICAgICB0aGlzLmZpbGVzU3RvcmUuYWRkRmlsZXMoZmlsZXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUhpZGRlbklucHV0KCkge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCAmJiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaGlkZGVuRmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jbGFzc05hbWUgPSBcIl9oaWRkZW5JbnB1dENsYXNzTmFtZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuRmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSk9PiB7XG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlLnRhcmdldC5maWxlcy5sZW5ndGg7aTxsO2krKyl7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzU3RvcmUoZmlsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==