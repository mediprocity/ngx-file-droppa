import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { FileParser } from "../Services/FileParser.service";
import { FilesStore } from "../Services/FileStore.service";
export class FileDropZone {
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
}
FileDropZone.decorators = [
    { type: Component, args: [{
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
            },] }
];
FileDropZone.ctorParameters = () => [
    { type: FilesStore },
    { type: ElementRef },
    { type: FileParser }
];
FileDropZone.propDecorators = {
    multiple: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3Bab25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvRGlyZWN0aXZlcy9GaWxlRHJvcFpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUF3QixpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBK0J6RCxNQUFNLE9BQU8sWUFBWTtJQUlyQixZQUFvQixVQUFzQixFQUFVLEVBQWEsRUFBVSxVQUFxQjtRQUE1RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFIeEYsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUM7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztJQUVEOztTQUVLO0lBRUwsT0FBTyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFDO1FBQ0Ys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LEVBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUF2SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFldkIsUUFBUSxFQUFFOztLQUVUO2dCQUNELElBQUksRUFBRTtvQkFDRixRQUFRLEVBQUUsY0FBYztvQkFDeEIsYUFBYSxFQUFFLG1CQUFtQjtvQkFDbEMsWUFBWSxFQUFFLGtCQUFrQjtvQkFDaEMsYUFBYSxFQUFFLG1CQUFtQjtvQkFDbEMsU0FBUyxFQUFFLGlCQUFpQjtpQkFDL0I7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7eUJBeEI1Qjs7Ozs7Ozs7Ozs7OztLQWFSO2FBWUo7OztZQTlCTyxVQUFVO1lBRkMsVUFBVTtZQUNyQixVQUFVOzs7dUJBd0NiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVQYXJzZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlUGFyc2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZXNTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVTdG9yZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZURyb3Bab25lLCBbZmlsZURyb3Bab25lXScsXG4gICAgcHJvdmlkZXJzOiBbRmlsZVBhcnNlcl0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuZmlsZV9kcm9wWm9uZV9pbnRlcm5hbCB7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBkYXNoZWQgI0RERDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIHdpZHRoOjQwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICAgICAgY29sb3I6I0NDQztcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgICcoZHJvcCknOiAnZHJvcCgkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnZW50ZXIpJzogJ2RyYWdlbnRlcigkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnb3ZlciknOiAnZHJhZ292ZXIoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ2xlYXZlKSc6ICdkcmFnbGVhdmUoJGV2ZW50KScsXG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KSdcbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsZURyb3Bab25lIHtcbiAgICBwcml2YXRlIGhpZGRlbkZpbGVJbnB1dCA9IG51bGw7XG4gICAgcHVibGljIHByb21pc2UgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlc1N0b3JlOiBGaWxlc1N0b3JlLCBwcml2YXRlIGVsOkVsZW1lbnRSZWYsIHByaXZhdGUgZmlsZVBhcnNlcjpGaWxlUGFyc2VyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSGlkZGVuSW5wdXQoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9ICdtdWx0aXBsZSc7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIb3N0IEV2ZW50IExpc3RlbmVyc1xuICAgICAqICovXG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgJiYgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBkcm9wKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWUuZGF0YVRyYW5zZmVyIHx8ICFlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLmZpbGVQYXJzZXIucHJvY2Vzc0lucHV0RnJvbURyb3AoZSlcbiAgICAgICAgICAgIC50aGVuKChmaWxlcyk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWxlc1N0b3JlKFsuLi5maWxlc10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgZHJhZ2VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgZHJhZ292ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHRydWUpO1xuICAgIH1cblxuICAgIGRyYWdsZWF2ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFB1YmxpYyBtZXRob2RzXG4gICAgICogKi9cblxuICAgIE9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZXMoZHJhZ092ZXI6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIC8vdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFsoZHJhZ092ZXIpID8gJ2FkZCcgOiAncmVtb3ZlJ10odGhpcy5fb3ZlckNscyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmlsZXNTdG9yZShmaWxlczpBcnJheTxGaWxlPik6dm9pZCB7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5hZGRGaWxlcyhmaWxlcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSGlkZGVuSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmNsYXNzTmFtZSA9IFwiX2hpZGRlbklucHV0Q2xhc3NOYW1lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKT0+IHtcbiAgICAgICAgICAgIGxldCBmaWxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDtpPGw7aSsrKXtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZXNTdG9yZShmaWxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19