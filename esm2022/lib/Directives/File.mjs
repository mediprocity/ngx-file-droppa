import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../Pipes/GetSize.pipe";
function File_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.ext);
} }
function File_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.fileName);
} }
function File_div_0_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.responseMessage);
} }
function File_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "span", 14);
    i0.ɵɵtemplate(2, File_div_0_div_8_span_2_Template, 2, 1, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.responseMessage);
} }
const _c0 = (a0, a1) => ({ "background-image": a0, "height": a1 });
function File_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, File_div_0_div_2_Template, 2, 1, "div", 3)(3, File_div_0_div_3_Template, 2, 1, "div", 4);
    i0.ɵɵelement(4, "progress", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6)(6, "span", 7)(7, "a", 8);
    i0.ɵɵlistener("click", function File_div_0_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.removeFileListener($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(8, File_div_0_div_8_Template, 3, 1, "div", 9);
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "getSize");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(8, _c0, "url(" + ctx_r0.previewSrc + ")", ctx_r0.previewHeight + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.ext);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.previewSrc);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.percentage);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingSuccessful);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 6, ctx_r0.file.size));
} }
export class File {
    constructor() {
        this.ext = '';
        this.previewSrc = '';
        this.fileName = '';
        //TODO: workaround - depends on strict values;
        this.previewHeight = 75;
        this.removeFile = new EventEmitter(true);
    }
    //ngHooks
    ngAfterContentInit() {
        this.file && this.getFileType();
    }
    removeFileListener(e) {
        e.preventDefault();
        this.removeFile && this.removeFile.emit(true);
    }
    getFileType() {
        let imageType = /^image\//, reader;
        if (!imageType.test(this.file.type)) {
            let ext = this.file.name.split('.').pop();
            this.fileName = this.file.name;
            this.ext = ext.length > 3
                ? 'file'
                : `.${ext}`;
            return;
        }
        reader = new FileReader();
        reader.addEventListener("load", () => {
            let img = new Image, result = reader.result;
            img.onload = () => {
                let ratio = img.height / img.width, scaledHeight = ratio * this.previewHeight;
                this.previewSrc = result;
                this.previewHeight = (scaledHeight < this.previewHeight)
                    ? this.previewHeight
                    : scaledHeight;
            };
            img.src = result;
        }, false);
        if (this.file) {
            reader.readAsDataURL(this.file);
        }
    }
    static { this.ɵfac = function File_Factory(t) { return new (t || File)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: File, selectors: [["fileItem"]], inputs: { file: "file", index: "index", percentage: "percentage", loadingSuccessful: "loadingSuccessful", responseMessage: "responseMessage" }, outputs: { removeFile: "removeFile" }, decls: 1, vars: 1, consts: [["class", "file-container", 4, "ngIf"], [1, "file-container"], [1, "flex-block", "file-preview", 3, "ngStyle"], ["class", "flex-block file-preview-ext ", 4, "ngIf"], ["class", "flex-block file-name", 4, "ngIf"], ["max", "100", 1, "file-progress", 3, "value"], [1, "file-remove"], [1, "remove"], ["href", "#", 3, "click"], ["class", "file-upload-error", 4, "ngIf"], [1, "flex-block"], [1, "flex-block", "file-preview-ext"], [1, "flex-block", "file-name"], [1, "file-upload-error"], [1, "warning"], ["class", "tooltiptext", 4, "ngIf"], [1, "tooltiptext"]], template: function File_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, File_div_0_Template, 12, 11, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.file);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.GetSizePipe], styles: [".file-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:75px;margin:20px 10px 0 0;transition:opacity .5s,margin .5s linear;flex-direction:column;position:relative}.file-container.uploaded[_ngcontent-%COMP%]{opacity:0;margin:0;height:0;overflow:hidden}.flex-block[_ngcontent-%COMP%]{width:90%;text-align:center;font-size:.8em;margin:2px 0}.file-remove[_ngcontent-%COMP%]{cursor:pointer;position:absolute;left:87%;top:8px}.file-upload-error[_ngcontent-%COMP%]{position:absolute;top:8px;left:-8px}.file-name[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden}.file-preview[_ngcontent-%COMP%]{background:#ccc;border-radius:2px;width:inherit;display:flex;align-items:center;justify-content:center;flex-direction:column;background-size:cover;color:#fff}.file-preview-ext[_ngcontent-%COMP%]{text-transform:uppercase}.file-progress[_ngcontent-%COMP%]{width:80%;display:block}button[_ngcontent-%COMP%]{margin:0}span[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;list-style:none;padding:0;margin:0 0 .25em}span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link{display:block;border:0;padding-left:28px;color:#c55500}span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#730800;background:transparent}span[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]:after, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:50%;left:0}span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{margin:-8px 0 0;background:#c55500}span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:before{background:#730800}.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{width:16px;height:16px;border-radius:16px}.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{left:3px;width:10px;height:2px;margin-top:-1px;background:#fff}.warning[_ngcontent-%COMP%]:before{content:\"!\";z-index:2;left:8px;margin-top:-8px;font-size:14px;font-weight:700;color:#000}.warning[_ngcontent-%COMP%]:after{z-index:1;border-width:0 11px 18px;border-style:solid;border-color:#F8D201 transparent;margin-top:-10px;background:transparent}.file-upload-error[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;white-space:nowrap;background-color:#000;color:#fff;text-align:center;padding:5px;border-radius:6px;position:absolute;z-index:1}.file-upload-error[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(File, [{
        type: Component,
        args: [{ selector: 'fileItem', template: `
        <div *ngIf="file" class="file-container">
            <div class="flex-block file-preview" [ngStyle]="{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight + 'px'}">
                <div *ngIf="ext" class="flex-block file-preview-ext ">{{ext}}</div>
                <div *ngIf="!previewSrc" class="flex-block file-name">{{fileName}}</div>
                <progress [value]="percentage" max="100" class="file-progress"></progress>
            </div>
            <div class="file-remove">
                <span class="remove"><a href="#" (click)="removeFileListener($event)"></a></span>
            </div>
            <div *ngIf="!loadingSuccessful" class="file-upload-error">
                <span class="warning"></span>
                <span *ngIf="responseMessage" class="tooltiptext">{{responseMessage}}</span>
            </div>
            <div class="flex-block">{{file.size | getSize }}</div>
        </div>
    `, styles: [".file-container{display:flex;justify-content:space-between;align-items:center;width:75px;margin:20px 10px 0 0;transition:opacity .5s,margin .5s linear;flex-direction:column;position:relative}.file-container.uploaded{opacity:0;margin:0;height:0;overflow:hidden}.flex-block{width:90%;text-align:center;font-size:.8em;margin:2px 0}.file-remove{cursor:pointer;position:absolute;left:87%;top:8px}.file-upload-error{position:absolute;top:8px;left:-8px}.file-name{text-overflow:ellipsis;overflow:hidden}.file-preview{background:#ccc;border-radius:2px;width:inherit;display:flex;align-items:center;justify-content:center;flex-direction:column;background-size:cover;color:#fff}.file-preview-ext{text-transform:uppercase}.file-progress{width:80%;display:block}button{margin:0}span{position:relative;z-index:1;overflow:hidden;list-style:none;padding:0;margin:0 0 .25em}span a:link{display:block;border:0;padding-left:28px;color:#c55500}span a:hover,span a:focus{color:#730800;background:transparent}span:before,span:after,span a:before,span a:after{content:\"\";position:absolute;top:50%;left:0}span a:before,span a:after{margin:-8px 0 0;background:#c55500}span a:hover:before,span a:focus:before{background:#730800}.remove a:before{width:16px;height:16px;border-radius:16px}.remove a:after{left:3px;width:10px;height:2px;margin-top:-1px;background:#fff}.warning:before{content:\"!\";z-index:2;left:8px;margin-top:-8px;font-size:14px;font-weight:700;color:#000}.warning:after{z-index:1;border-width:0 11px 18px;border-style:solid;border-color:#F8D201 transparent;margin-top:-10px;background:transparent}.file-upload-error .tooltiptext{visibility:hidden;white-space:nowrap;background-color:#000;color:#fff;text-align:center;padding:5px;border-radius:6px;position:absolute;z-index:1}.file-upload-error:hover .tooltiptext{visibility:visible}\n"] }]
    }], null, { file: [{
            type: Input
        }], index: [{
            type: Input
        }], percentage: [{
            type: Input
        }], loadingSuccessful: [{
            type: Input
        }], responseMessage: [{
            type: Input
        }], removeFile: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(File, { className: "File" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL0RpcmVjdGl2ZXMvRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN6QyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUErS1AsK0JBQXNEO0lBQUEsWUFBTztJQUFBLGlCQUFNOzs7SUFBYixlQUFPO0lBQVAsZ0NBQU87OztJQUM3RCwrQkFBc0Q7SUFBQSxZQUFZO0lBQUEsaUJBQU07OztJQUFsQixlQUFZO0lBQVoscUNBQVk7OztJQVFsRSxnQ0FBa0Q7SUFBQSxZQUFtQjtJQUFBLGlCQUFPOzs7SUFBMUIsZUFBbUI7SUFBbkIsNENBQW1COzs7SUFGekUsK0JBQTBEO0lBQ3RELDJCQUE2QjtJQUM3QixvRUFBNEU7SUFDaEYsaUJBQU07OztJQURLLGVBQXFCO0lBQXJCLDZDQUFxQjs7Ozs7SUFYcEMsOEJBQXlDLGFBQUE7SUFFakMsMkRBQW1FLDhDQUFBO0lBRW5FLDhCQUEwRTtJQUM5RSxpQkFBTTtJQUNOLDhCQUF5QixjQUFBLFdBQUE7SUFDWSxrSkFBUyxlQUFBLGlDQUEwQixDQUFBLElBQUM7SUFBQyxpQkFBSSxFQUFBLEVBQUE7SUFFOUUsMkRBR007SUFDTiwrQkFBd0I7SUFBQSxhQUF3Qjs7SUFBQSxpQkFBTSxFQUFBOzs7SUFaakIsZUFBMkY7SUFBM0YsbUhBQTJGO0lBQ3RILGVBQVM7SUFBVCxpQ0FBUztJQUNULGVBQWlCO0lBQWpCLHlDQUFpQjtJQUNiLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUs1QixlQUF3QjtJQUF4QixnREFBd0I7SUFJTixlQUF3QjtJQUF4Qiw2REFBd0I7O0FBSzVELE1BQU0sT0FBTyxJQUFJO0lBM0xqQjtRQTRMVyxRQUFHLEdBQVUsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUM1Qiw4Q0FBOEM7UUFDdkMsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFjdkIsZUFBVSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBNkNqRDtJQXhERyxTQUFTO0lBQ1Qsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQVdELGtCQUFrQixDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLFNBQVMsR0FBRyxVQUFVLEVBQ3RCLE1BQU0sQ0FBQztRQUVYLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUVELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNkLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFDOUIsWUFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWE7b0JBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDckIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRVYsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO3FFQS9EUSxJQUFJO29FQUFKLElBQUk7WUFsQlQsdURBY007O1lBZEEsK0JBQVU7OztpRkFrQlgsSUFBSTtjQTNMaEIsU0FBUzsyQkFDSSxVQUFVLFlBdUtWOzs7Ozs7Ozs7Ozs7Ozs7O0tBZ0JUO2dCQWdCUSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU07O2tGQW5CRSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdTdHlsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7R2V0U2l6ZVBpcGV9IGZyb20gJy4uL1BpcGVzL0dldFNpemUucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZUl0ZW0nLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmZpbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweCAwIDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIG1hcmdpbiAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLWNvbnRhaW5lci51cGxvYWRlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWJsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXJlbW92ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA4NyU7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS11cGxvYWQtZXJyb3Ige1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBsZWZ0Oi04cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbGUtbmFtZSB7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1wcmV2aWV3IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgIC5maWxlLXByZXZpZXctZXh0IHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1wcm9ncmVzcyB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuc3BhbiB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgei1pbmRleDoxO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowIDAgMC4yNWVtO1xufVxuXG5zcGFuIGE6bGluayB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBib3JkZXI6MDtcbiAgICBwYWRkaW5nLWxlZnQ6MjhweDtcbiAgICBjb2xvcjojYzU1NTAwO1xufVxuXG5zcGFuIGE6aG92ZXIsXG5zcGFuIGE6Zm9jdXMge1xuICAgIGNvbG9yOiM3MzA4MDA7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuc3BhbjpiZWZvcmUsXG5zcGFuOmFmdGVyLFxuc3BhbiBhOmJlZm9yZSxcbnNwYW4gYTphZnRlciB7XG4gICAgY29udGVudDpcIlwiO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDowO1xufVxuXG5zcGFuIGE6YmVmb3JlLFxuc3BhbiBhOmFmdGVyIHtcbiAgICBtYXJnaW46LThweCAwIDA7XG4gICAgYmFja2dyb3VuZDojYzU1NTAwO1xufVxuXG5zcGFuIGE6aG92ZXI6YmVmb3JlLFxuc3BhbiBhOmZvY3VzOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDojNzMwODAwO1xufVxuXG5cbi5yZW1vdmUgYTpiZWZvcmUge1xuICAgIHdpZHRoOjE2cHg7XG4gICAgaGVpZ2h0OjE2cHg7XG4gICAgLyogY3NzMyAqL1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czoxNnB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czoxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTZweDtcbn1cblxuLnJlbW92ZSBhOmFmdGVyIHtcbiAgICBsZWZ0OjNweDtcbiAgICB3aWR0aDoxMHB4O1xuICAgIGhlaWdodDoycHg7XG4gICAgbWFyZ2luLXRvcDotMXB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cbi53YXJuaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDpcIiFcIjtcbiAgICB6LWluZGV4OjI7XG4gICAgbGVmdDo4cHg7XG4gICAgbWFyZ2luLXRvcDotOHB4O1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY29sb3I6IzAwMDtcbn1cblxuLndhcm5pbmc6YWZ0ZXIge1xuICAgIHotaW5kZXg6MTtcbiAgICBib3JkZXItd2lkdGg6MCAxMXB4IDE4cHg7XG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjojRjhEMjAxIHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi10b3A6LTEwcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbn1cblxuLmZpbGUtdXBsb2FkLWVycm9yIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5maWxlLXVwbG9hZC1lcnJvcjpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZmlsZVwiIGNsYXNzPVwiZmlsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWJsb2NrIGZpbGUtcHJldmlld1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHByZXZpZXdTcmMgKyAnKScsICdoZWlnaHQnOiBwcmV2aWV3SGVpZ2h0ICsgJ3B4J31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZXh0XCIgY2xhc3M9XCJmbGV4LWJsb2NrIGZpbGUtcHJldmlldy1leHQgXCI+e3tleHR9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhcHJldmlld1NyY1wiIGNsYXNzPVwiZmxleC1ibG9jayBmaWxlLW5hbWVcIj57e2ZpbGVOYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgW3ZhbHVlXT1cInBlcmNlbnRhZ2VcIiBtYXg9XCIxMDBcIiBjbGFzcz1cImZpbGUtcHJvZ3Jlc3NcIj48L3Byb2dyZXNzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlbW92ZVwiPjxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cInJlbW92ZUZpbGVMaXN0ZW5lcigkZXZlbnQpXCI+PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsb2FkaW5nU3VjY2Vzc2Z1bFwiIGNsYXNzPVwiZmlsZS11cGxvYWQtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyZXNwb25zZU1lc3NhZ2VcIiBjbGFzcz1cInRvb2x0aXB0ZXh0XCI+e3tyZXNwb25zZU1lc3NhZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYmxvY2tcIj57e2ZpbGUuc2l6ZSB8IGdldFNpemUgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEZpbGUge1xuICAgIHB1YmxpYyBleHQ6c3RyaW5nID0gJyc7XG4gICAgcHVibGljIHByZXZpZXdTcmM6c3RyaW5nID0gJyc7XG4gICAgcHVibGljIGZpbGVOYW1lOnN0cmluZyA9ICcnO1xuICAgIC8vVE9ETzogd29ya2Fyb3VuZCAtIGRlcGVuZHMgb24gc3RyaWN0IHZhbHVlcztcbiAgICBwdWJsaWMgcHJldmlld0hlaWdodDpudW1iZXIgPSA3NTtcblxuXG4gICAgLy9uZ0hvb2tzXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLmZpbGUgJiYgdGhpcy5nZXRGaWxlVHlwZSgpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGZpbGU7XG4gICAgQElucHV0KCkgaW5kZXg7XG4gICAgQElucHV0KCkgcGVyY2VudGFnZTtcbiAgICBASW5wdXQoKSBsb2FkaW5nU3VjY2Vzc2Z1bDtcbiAgICBASW5wdXQoKSByZXNwb25zZU1lc3NhZ2U7XG5cbiAgICBAT3V0cHV0KCkgcmVtb3ZlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cblxuICAgIHJlbW92ZUZpbGVMaXN0ZW5lcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGaWxlICYmIHRoaXMucmVtb3ZlRmlsZS5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIGdldEZpbGVUeXBlKCkge1xuICAgICAgICBsZXQgaW1hZ2VUeXBlID0gL15pbWFnZVxcLy8sXG4gICAgICAgICAgICByZWFkZXI7XG5cbiAgICAgICAgaWYgKCFpbWFnZVR5cGUudGVzdCh0aGlzLmZpbGUudHlwZSkpIHtcbiAgICAgICAgICAgIGxldCBleHQgPSB0aGlzLmZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gdGhpcy5maWxlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmV4dCA9IGV4dC5sZW5ndGggPiAzXG4gICAgICAgICAgICAgICAgPyAnZmlsZSdcbiAgICAgICAgICAgICAgICA6IGAuJHtleHR9YDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UsXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcblxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSBpbWcuaGVpZ2h0IC8gaW1nLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZWRIZWlnaHQgPSByYXRpbyAqIHRoaXMucHJldmlld0hlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1NyYyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdIZWlnaHQgPSAoc2NhbGVkSGVpZ2h0IDwgdGhpcy5wcmV2aWV3SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJldmlld0hlaWdodFxuICAgICAgICAgICAgICAgICAgICA6IHNjYWxlZEhlaWdodDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSByZXN1bHQ7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19