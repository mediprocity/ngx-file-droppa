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
}
FileDropZone.ɵfac = function FileDropZone_Factory(t) { return new (t || FileDropZone)(i0.ɵɵdirectiveInject(i1.FilesStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.FileParser)); };
FileDropZone.ɵcmp = i0.ɵɵdefineComponent({ type: FileDropZone, selectors: [["fileDropZone"], ["", "fileDropZone", ""]], hostBindings: function FileDropZone_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("drop", function FileDropZone_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragenter", function FileDropZone_dragenter_HostBindingHandler($event) { return ctx.dragenter($event); })("dragover", function FileDropZone_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("dragleave", function FileDropZone_dragleave_HostBindingHandler($event) { return ctx.dragleave($event); })("click", function FileDropZone_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { multiple: "multiple" }, features: [i0.ɵɵProvidersFeature([FileParser])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FileDropZone_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["\n        .file_dropZone_internal {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDropZone, [{
        type: Component,
        args: [{
                selector: 'fileDropZone, [fileDropZone]',
                providers: [FileParser],
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
    `],
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
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.FilesStore }, { type: i0.ElementRef }, { type: i2.FileParser }]; }, { multiple: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZURyb3Bab25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvRGlyZWN0aXZlcy9GaWxlRHJvcFpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQXdCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFnQzFELE1BQU0sT0FBTyxZQUFZO0lBSXJCLFlBQW9CLFVBQXNCLEVBQVUsRUFBYSxFQUFVLFVBQXFCO1FBQTVFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUh4RixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDcEQ7SUFDSCxDQUFDO0lBRUQ7O1NBRUs7SUFFTCxPQUFPLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUM7UUFDRixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsQ0FB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QUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O3dFQTFGUSxZQUFZO2lEQUFaLFlBQVk7NkZBQVosZ0JBQVksc0ZBQVoscUJBQ1gsb0ZBRFcsb0JBQ1osc0ZBRFkscUJBQ1gsOEVBRFcsbUJBQ2I7NEVBNUJlLENBQUMsVUFBVSxDQUFDOztRQWdCbkIsa0JBQXlCOzt1RkFXcEIsWUFBWTtjQTdCeEIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7S0FhUixDQUFDO2dCQUNGLFFBQVEsRUFBRTs7S0FFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGFBQWEsRUFBRSxtQkFBbUI7b0JBQ2xDLFlBQVksRUFBRSxrQkFBa0I7b0JBQ2hDLGFBQWEsRUFBRSxtQkFBbUI7b0JBQ2xDLFNBQVMsRUFBRSxpQkFBaUI7aUJBQy9CO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3hDOytHQVVPLFFBQVE7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZVBhcnNlcn0gZnJvbSBcIi4uL1NlcnZpY2VzL0ZpbGVQYXJzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlc1N0b3JlfSBmcm9tIFwiLi4vU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWxlRHJvcFpvbmUsIFtmaWxlRHJvcFpvbmVdJyxcbiAgICBwcm92aWRlcnM6IFtGaWxlUGFyc2VyXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5maWxlX2Ryb3Bab25lX2ludGVybmFsIHtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IGRhc2hlZCAjREREO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgd2lkdGg6NDAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XG4gICAgICAgICAgICBjb2xvcjojQ0NDO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgfVxuICAgIGBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhkcm9wKSc6ICdkcm9wKCRldmVudCknLFxuICAgICAgICAnKGRyYWdlbnRlciknOiAnZHJhZ2VudGVyKCRldmVudCknLFxuICAgICAgICAnKGRyYWdvdmVyKSc6ICdkcmFnb3ZlcigkZXZlbnQpJyxcbiAgICAgICAgJyhkcmFnbGVhdmUpJzogJ2RyYWdsZWF2ZSgkZXZlbnQpJyxcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygkZXZlbnQpJ1xuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcFpvbmUge1xuICAgIHByaXZhdGUgaGlkZGVuRmlsZUlucHV0ID0gbnVsbDtcbiAgICBwdWJsaWMgcHJvbWlzZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVzU3RvcmU6IEZpbGVzU3RvcmUsIHByaXZhdGUgZWw6RWxlbWVudFJlZiwgcHJpdmF0ZSBmaWxlUGFyc2VyOkZpbGVQYXJzZXIpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIaWRkZW5JbnB1dCgpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gJ211bHRpcGxlJztcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEhvc3QgRXZlbnQgTGlzdGVuZXJzXG4gICAgICogKi9cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCAmJiB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jbGljaygpO1xuICAgIH1cblxuICAgIGRyb3AoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghZS5kYXRhVHJhbnNmZXIgfHwgIWUuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMuZmlsZVBhcnNlci5wcm9jZXNzSW5wdXRGcm9tRHJvcChlKVxuICAgICAgICAgICAgLnRoZW4oKGZpbGVzKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGVzU3RvcmUoWy4uLmZpbGVzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBkcmFnZW50ZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBkcmFnb3ZlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXModHJ1ZSk7XG4gICAgfVxuXG4gICAgZHJhZ2xlYXZlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUHVibGljIG1ldGhvZHNcbiAgICAgKiAqL1xuXG4gICAgT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dCAmJiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaGlkZGVuRmlsZUlucHV0KTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlcyhkcmFnT3Zlcjpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgLy90aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0WyhkcmFnT3ZlcikgPyAnYWRkJyA6ICdyZW1vdmUnXSh0aGlzLl9vdmVyQ2xzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGaWxlc1N0b3JlKGZpbGVzOkFycmF5PEZpbGU+KTp2b2lkIHtcbiAgICAgICAgdGhpcy5maWxlc1N0b3JlLmFkZEZpbGVzKGZpbGVzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVIaWRkZW5JbnB1dCgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIiwgXCJtdWx0aXBsZVwiKTtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY2xhc3NOYW1lID0gXCJfaGlkZGVuSW5wdXRDbGFzc05hbWVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGVzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gZS50YXJnZXQuZmlsZXMubGVuZ3RoO2k8bDtpKyspe1xuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZS50YXJnZXQuZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWxlc1N0b3JlKGZpbGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=