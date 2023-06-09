import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FileParser } from "../Services/FileParser.service";
import * as i0 from "@angular/core";
import * as i1 from "../Services/FileStore.service";
import * as i2 from "../Services/FileParser.service";
const _c0 = ["*"];
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
    static { this.ɵfac = function FileDropZone_Factory(t) { return new (t || FileDropZone)(i0.ɵɵdirectiveInject(i1.FilesStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.FileParser)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FileDropZone, selectors: [["fileDropZone"], ["", "fileDropZone", ""]], hostBindings: function FileDropZone_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("drop", function FileDropZone_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function FileDropZone_dragenter_HostBindingHandler($event) { return ctx.dragenter($event); })("dragover", function FileDropZone_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("dragleave", function FileDropZone_dragleave_HostBindingHandler($event) { return ctx.dragleave($event); })("click", function FileDropZone_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { multiple: "multiple" }, features: [i0.ɵɵProvidersFeature([FileParser])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FileDropZone_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".file_dropZone_internal{border:3px dashed #DDD;border-radius:10px;padding:10px;width:400px;height:200px;color:#ccc;text-align:center;display:table-cell;vertical-align:middle;cursor:pointer}\n"], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDropZone, [{
        type: Component,
        args: [{ selector: 'fileDropZone, [fileDropZone]', providers: [FileParser], template: `
        <ng-content></ng-content>
    `, host: {
                    '(drop)': 'drop($event)',
                    '(dragenter)': 'dragenter($event)',
                    '(dragover)': 'dragover($event)',
                    '(dragleave)': 'dragleave($event)',
                    '(click)': 'onClick($event)'
                }, encapsulation: ViewEncapsulation.None, styles: [".file_dropZone_internal{border:3px dashed #DDD;border-radius:10px;padding:10px;width:400px;height:200px;color:#ccc;text-align:center;display:table-cell;vertical-align:middle;cursor:pointer}\n"] }]
    }], function () { return [{ type: i1.FilesStore }, { type: i0.ElementRef }, { type: i2.FileParser }]; }, { multiple: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3Bab25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvRGlyZWN0aXZlcy9GaWxlRHJvcFpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQXdCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFnQzFELE1BQU0sT0FBTyxZQUFZO0lBSXJCLFlBQW9CLFVBQXNCLEVBQVUsRUFBYSxFQUFVLFVBQXFCO1FBQTVFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUh4RixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDcEQ7SUFDSCxDQUFDO0lBRUQ7O1NBRUs7SUFFTCxPQUFPLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUM7UUFDRixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsQ0FB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QUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7NkVBMUZRLFlBQVk7b0VBQVosWUFBWTtpR0FBWixnQkFBWSxzRkFBWixxQkFDWCxvRkFEVyxvQkFDWixzRkFEWSxxQkFDWCw4RUFEVyxtQkFDYjtnRkE1QmUsQ0FBQyxVQUFVLENBQUM7O1lBZ0JuQixrQkFBeUI7Ozt1RkFXcEIsWUFBWTtjQTdCeEIsU0FBUzsyQkFDSSw4QkFBOEIsYUFDN0IsQ0FBQyxVQUFVLENBQUMsWUFlYjs7S0FFVCxRQUNLO29CQUNGLFFBQVEsRUFBRSxjQUFjO29CQUN4QixhQUFhLEVBQUUsbUJBQW1CO29CQUNsQyxZQUFZLEVBQUUsa0JBQWtCO29CQUNoQyxhQUFhLEVBQUUsbUJBQW1CO29CQUNsQyxTQUFTLEVBQUUsaUJBQWlCO2lCQUMvQixpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJOytHQVdqQyxRQUFRO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVQYXJzZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9GaWxlUGFyc2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZXNTdG9yZX0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVTdG9yZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZURyb3Bab25lLCBbZmlsZURyb3Bab25lXScsXG4gICAgcHJvdmlkZXJzOiBbRmlsZVBhcnNlcl0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuZmlsZV9kcm9wWm9uZV9pbnRlcm5hbCB7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBkYXNoZWQgI0RERDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIHdpZHRoOjQwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICAgICAgY29sb3I6I0NDQztcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgICcoZHJvcCknOiAnZHJvcCgkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnZW50ZXIpJzogJ2RyYWdlbnRlcigkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnb3ZlciknOiAnZHJhZ292ZXIoJGV2ZW50KScsXG4gICAgICAgICcoZHJhZ2xlYXZlKSc6ICdkcmFnbGVhdmUoJGV2ZW50KScsXG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KSdcbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsZURyb3Bab25lIHtcbiAgICBwcml2YXRlIGhpZGRlbkZpbGVJbnB1dCA9IG51bGw7XG4gICAgcHVibGljIHByb21pc2UgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlc1N0b3JlOiBGaWxlc1N0b3JlLCBwcml2YXRlIGVsOkVsZW1lbnRSZWYsIHByaXZhdGUgZmlsZVBhcnNlcjpGaWxlUGFyc2VyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSGlkZGVuSW5wdXQoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9ICdtdWx0aXBsZSc7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIb3N0IEV2ZW50IExpc3RlbmVyc1xuICAgICAqICovXG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgJiYgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBkcm9wKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIWUuZGF0YVRyYW5zZmVyIHx8ICFlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLmZpbGVQYXJzZXIucHJvY2Vzc0lucHV0RnJvbURyb3AoZSlcbiAgICAgICAgICAgIC50aGVuKChmaWxlcyk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWxlc1N0b3JlKFsuLi5maWxlc10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgZHJhZ2VudGVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgZHJhZ292ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHRydWUpO1xuICAgIH1cblxuICAgIGRyYWdsZWF2ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFB1YmxpYyBtZXRob2RzXG4gICAgICogKi9cblxuICAgIE9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZXMoZHJhZ092ZXI6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIC8vdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdFsoZHJhZ092ZXIpID8gJ2FkZCcgOiAncmVtb3ZlJ10odGhpcy5fb3ZlckNscyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmlsZXNTdG9yZShmaWxlczpBcnJheTxGaWxlPik6dm9pZCB7XG4gICAgICAgIHRoaXMuZmlsZXNTdG9yZS5hZGRGaWxlcyhmaWxlcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSGlkZGVuSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIFwibXVsdGlwbGVcIik7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLndpZHRoID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmNsYXNzTmFtZSA9IFwiX2hpZGRlbklucHV0Q2xhc3NOYW1lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKT0+IHtcbiAgICAgICAgICAgIGxldCBmaWxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDtpPGw7aSsrKXtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZXNTdG9yZShmaWxlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19