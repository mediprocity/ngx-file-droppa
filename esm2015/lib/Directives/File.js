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
const _c0 = function (a0, a1) { return { "background-image": a0, "height": a1 }; };
function File_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, File_div_0_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵtemplate(3, File_div_0_div_3_Template, 2, 1, "div", 4);
    i0.ɵɵelement(4, "progress", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "span", 7);
    i0.ɵɵelementStart(7, "a", 8);
    i0.ɵɵlistener("click", function File_div_0_Template_a_click_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.removeFileListener($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, File_div_0_div_8_Template, 3, 1, "div", 9);
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "getSize");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
}
File.ɵfac = function File_Factory(t) { return new (t || File)(); };
File.ɵcmp = i0.ɵɵdefineComponent({ type: File, selectors: [["fileItem"]], inputs: { file: "file", index: "index", percentage: "percentage", loadingSuccessful: "loadingSuccessful", responseMessage: "responseMessage" }, outputs: { removeFile: "removeFile" }, decls: 1, vars: 1, consts: [["class", "file-container", 4, "ngIf"], [1, "file-container"], [1, "flex-block", "file-preview", 3, "ngStyle"], ["class", "flex-block file-preview-ext ", 4, "ngIf"], ["class", "flex-block file-name", 4, "ngIf"], ["max", "100", 1, "file-progress", 3, "value"], [1, "file-remove"], [1, "remove"], ["href", "#", 3, "click"], ["class", "file-upload-error", 4, "ngIf"], [1, "flex-block"], [1, "flex-block", "file-preview-ext"], [1, "flex-block", "file-name"], [1, "file-upload-error"], [1, "warning"], ["class", "tooltiptext", 4, "ngIf"], [1, "tooltiptext"]], template: function File_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, File_div_0_Template, 12, 11, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.file);
    } }, directives: [i1.NgIf, i1.NgStyle], pipes: [i2.GetSizePipe], styles: [".file-container[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 10px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n            position:relative;\n        }\n\n        .file-container.uploaded[_ngcontent-%COMP%] {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n\n        .flex-block[_ngcontent-%COMP%] {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n\n        .file-remove[_ngcontent-%COMP%] {\n            cursor: pointer;\n            position: absolute;\n            left: 87%;\n            top: 8px;\n        }\n        .file-upload-error[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 8px;\n            left:-8px;\n        }\n        .file-name[_ngcontent-%COMP%] {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n\n        .file-preview[_ngcontent-%COMP%] {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n\n         .file-preview-ext[_ngcontent-%COMP%] {\n            text-transform: uppercase;\n        }\n\n        .file-progress[_ngcontent-%COMP%] {\n            width: 80%;\n            display: block;\n        }\n\n\n        button[_ngcontent-%COMP%] {\n            margin: 0;\n        }\n\nspan[_ngcontent-%COMP%] {\n    position:relative;\n    z-index:1;\n    overflow:hidden;\n    list-style:none;\n    padding:0;\n    margin:0 0 0.25em;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link {\n    display:block;\n    border:0;\n    padding-left:28px;\n    color:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color:#730800;\n    background:transparent;\n}\n\nspan[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]:after, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    content:\"\";\n    position:absolute;\n    top:50%;\n    left:0;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    margin:-8px 0 0;\n    background:#c55500;\n}\n\nspan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:before {\n    background:#730800;\n}\n\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    width:16px;\n    height:16px;\n    \n    -webkit-border-radius:16px;\n    -moz-border-radius:16px;\n    border-radius:16px;\n}\n\n.remove[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    left:3px;\n    width:10px;\n    height:2px;\n    margin-top:-1px;\n    background:#fff;\n}\n.warning[_ngcontent-%COMP%]:before {\n    content:\"!\";\n    z-index:2;\n    left:8px;\n    margin-top:-8px;\n    font-size:14px;\n    font-weight:bold;\n    color:#000;\n}\n\n.warning[_ngcontent-%COMP%]:after {\n    z-index:1;\n    border-width:0 11px 18px;\n    border-style:solid;\n    border-color:#F8D201 transparent;\n    margin-top:-10px;\n    background:transparent;\n}\n\n.file-upload-error[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: hidden;\n    white-space:nowrap;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 6px;\n\n    \n    position: absolute;\n    z-index: 1;\n}\n\n.file-upload-error[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: visible;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(File, [{
        type: Component,
        args: [{
                selector: 'fileItem',
                styles: [`
        .file-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 75px;
            margin: 20px 10px 0 0;
            transition: opacity 0.5s, margin 0.5s linear;
            flex-direction: column;
            position:relative;
        }

        .file-container.uploaded {
            opacity: 0;
            margin: 0;
            height: 0;
            overflow: hidden;
        }

        .flex-block {
            width: 90%;
            text-align: center;
            font-size: 0.8em;
            margin: 2px 0;
        }

        .file-remove {
            cursor: pointer;
            position: absolute;
            left: 87%;
            top: 8px;
        }
        .file-upload-error {
            position: absolute;
            top: 8px;
            left:-8px;
        }
        .file-name {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .file-preview {
            background: #ccc;
            border-radius: 2px;
            width: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-size: cover;
            color: #fff;
        }

         .file-preview-ext {
            text-transform: uppercase;
        }

        .file-progress {
            width: 80%;
            display: block;
        }


        button {
            margin: 0;
        }

span {
    position:relative;
    z-index:1;
    overflow:hidden;
    list-style:none;
    padding:0;
    margin:0 0 0.25em;
}

span a:link {
    display:block;
    border:0;
    padding-left:28px;
    color:#c55500;
}

span a:hover,
span a:focus {
    color:#730800;
    background:transparent;
}

span:before,
span:after,
span a:before,
span a:after {
    content:"";
    position:absolute;
    top:50%;
    left:0;
}

span a:before,
span a:after {
    margin:-8px 0 0;
    background:#c55500;
}

span a:hover:before,
span a:focus:before {
    background:#730800;
}


.remove a:before {
    width:16px;
    height:16px;
    /* css3 */
    -webkit-border-radius:16px;
    -moz-border-radius:16px;
    border-radius:16px;
}

.remove a:after {
    left:3px;
    width:10px;
    height:2px;
    margin-top:-1px;
    background:#fff;
}
.warning:before {
    content:"!";
    z-index:2;
    left:8px;
    margin-top:-8px;
    font-size:14px;
    font-weight:bold;
    color:#000;
}

.warning:after {
    z-index:1;
    border-width:0 11px 18px;
    border-style:solid;
    border-color:#F8D201 transparent;
    margin-top:-10px;
    background:transparent;
}

.file-upload-error .tooltiptext {
    visibility: hidden;
    white-space:nowrap;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
}

.file-upload-error:hover .tooltiptext {
    visibility: visible;
}

    `],
                template: `
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
    `
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL0RpcmVjdGl2ZXMvRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUN6QyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUErS1AsK0JBQXNEO0lBQUEsWUFBTztJQUFBLGlCQUFNOzs7SUFBYixlQUFPO0lBQVAsZ0NBQU87OztJQUM3RCwrQkFBc0Q7SUFBQSxZQUFZO0lBQUEsaUJBQU07OztJQUFsQixlQUFZO0lBQVoscUNBQVk7OztJQVFsRSxnQ0FBa0Q7SUFBQSxZQUFtQjtJQUFBLGlCQUFPOzs7SUFBMUIsZUFBbUI7SUFBbkIsNENBQW1COzs7SUFGekUsK0JBQTBEO0lBQ3RELDJCQUE2QjtJQUM3QixvRUFBNEU7SUFDaEYsaUJBQU07OztJQURLLGVBQXFCO0lBQXJCLDZDQUFxQjs7Ozs7SUFYcEMsOEJBQXlDO0lBQ3JDLDhCQUFpSTtJQUM3SCwyREFBbUU7SUFDbkUsMkRBQXdFO0lBQ3hFLDhCQUEwRTtJQUM5RSxpQkFBTTtJQUNOLDhCQUF5QjtJQUNyQiwrQkFBcUI7SUFBQSw0QkFBaUQ7SUFBckMsdUxBQW9DO0lBQUMsaUJBQUk7SUFBQSxpQkFBTztJQUNyRixpQkFBTTtJQUNOLDJEQUdNO0lBQ04sK0JBQXdCO0lBQUEsYUFBd0I7O0lBQUEsaUJBQU07SUFDMUQsaUJBQU07OztJQWJtQyxlQUEyRjtJQUEzRixtSEFBMkY7SUFDdEgsZUFBUztJQUFULGlDQUFTO0lBQ1QsZUFBaUI7SUFBakIseUNBQWlCO0lBQ2IsZUFBb0I7SUFBcEIseUNBQW9CO0lBSzVCLGVBQXdCO0lBQXhCLGdEQUF3QjtJQUlOLGVBQXdCO0lBQXhCLDZEQUF3Qjs7QUFLNUQsTUFBTSxPQUFPLElBQUk7SUEzTGpCO1FBNExXLFFBQUcsR0FBVSxF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QWlCO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ1N0eWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtHZXRTaXplUGlwZX0gZnJvbSAnLi4vUGlwZXMvR2V0U2l6ZS5waXBlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmaWxlSXRlbScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuZmlsZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4IDAgMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgbWFyZ2luIDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtY29udGFpbmVyLnVwbG9hZGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgtYmxvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtcmVtb3ZlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDg3JTtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWxlLXVwbG9hZC1lcnJvciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGxlZnQ6LThweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXByZXZpZXcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAgLmZpbGUtcHJldmlldy1leHQge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXByb2dyZXNzIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG5zcGFuIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB6LWluZGV4OjE7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjAgMCAwLjI1ZW07XG59XG5cbnNwYW4gYTpsaW5rIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGJvcmRlcjowO1xuICAgIHBhZGRpbmctbGVmdDoyOHB4O1xuICAgIGNvbG9yOiNjNTU1MDA7XG59XG5cbnNwYW4gYTpob3ZlcixcbnNwYW4gYTpmb2N1cyB7XG4gICAgY29sb3I6IzczMDgwMDtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG5zcGFuOmJlZm9yZSxcbnNwYW46YWZ0ZXIsXG5zcGFuIGE6YmVmb3JlLFxuc3BhbiBhOmFmdGVyIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OjA7XG59XG5cbnNwYW4gYTpiZWZvcmUsXG5zcGFuIGE6YWZ0ZXIge1xuICAgIG1hcmdpbjotOHB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiNjNTU1MDA7XG59XG5cbnNwYW4gYTpob3ZlcjpiZWZvcmUsXG5zcGFuIGE6Zm9jdXM6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiM3MzA4MDA7XG59XG5cblxuLnJlbW92ZSBhOmJlZm9yZSB7XG4gICAgd2lkdGg6MTZweDtcbiAgICBoZWlnaHQ6MTZweDtcbiAgICAvKiBjc3MzICovXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjE2cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czoxNnB4O1xufVxuXG4ucmVtb3ZlIGE6YWZ0ZXIge1xuICAgIGxlZnQ6M3B4O1xuICAgIHdpZHRoOjEwcHg7XG4gICAgaGVpZ2h0OjJweDtcbiAgICBtYXJnaW4tdG9wOi0xcHg7XG4gICAgYmFja2dyb3VuZDojZmZmO1xufVxuLndhcm5pbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiIVwiO1xuICAgIHotaW5kZXg6MjtcbiAgICBsZWZ0OjhweDtcbiAgICBtYXJnaW4tdG9wOi04cHg7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBjb2xvcjojMDAwO1xufVxuXG4ud2FybmluZzphZnRlciB7XG4gICAgei1pbmRleDoxO1xuICAgIGJvcmRlci13aWR0aDowIDExcHggMThweDtcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiNGOEQyMDEgdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDotMTBweDtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG4uZmlsZS11cGxvYWQtZXJyb3IgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmZpbGUtdXBsb2FkLWVycm9yOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuICAgIGBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJmaWxlXCIgY2xhc3M9XCJmaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYmxvY2sgZmlsZS1wcmV2aWV3XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgcHJldmlld1NyYyArICcpJywgJ2hlaWdodCc6IHByZXZpZXdIZWlnaHQgKyAncHgnfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJleHRcIiBjbGFzcz1cImZsZXgtYmxvY2sgZmlsZS1wcmV2aWV3LWV4dCBcIj57e2V4dH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFwcmV2aWV3U3JjXCIgY2xhc3M9XCJmbGV4LWJsb2NrIGZpbGUtbmFtZVwiPnt7ZmlsZU5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBbdmFsdWVdPVwicGVyY2VudGFnZVwiIG1heD1cIjEwMFwiIGNsYXNzPVwiZmlsZS1wcm9ncmVzc1wiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXJlbW92ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVtb3ZlXCI+PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwicmVtb3ZlRmlsZUxpc3RlbmVyKCRldmVudClcIj48L2E+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdTdWNjZXNzZnVsXCIgY2xhc3M9XCJmaWxlLXVwbG9hZC1lcnJvclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2FybmluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlc3BvbnNlTWVzc2FnZVwiIGNsYXNzPVwidG9vbHRpcHRleHRcIj57e3Jlc3BvbnNlTWVzc2FnZX19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ibG9ja1wiPnt7ZmlsZS5zaXplIHwgZ2V0U2l6ZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcHVibGljIGV4dDpzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgcHJldmlld1NyYzpzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgZmlsZU5hbWU6c3RyaW5nID0gJyc7XG4gICAgLy9UT0RPOiB3b3JrYXJvdW5kIC0gZGVwZW5kcyBvbiBzdHJpY3QgdmFsdWVzO1xuICAgIHB1YmxpYyBwcmV2aWV3SGVpZ2h0Om51bWJlciA9IDc1O1xuXG5cbiAgICAvL25nSG9va3NcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuZmlsZSAmJiB0aGlzLmdldEZpbGVUeXBlKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZmlsZTtcbiAgICBASW5wdXQoKSBpbmRleDtcbiAgICBASW5wdXQoKSBwZXJjZW50YWdlO1xuICAgIEBJbnB1dCgpIGxvYWRpbmdTdWNjZXNzZnVsO1xuICAgIEBJbnB1dCgpIHJlc3BvbnNlTWVzc2FnZTtcblxuICAgIEBPdXRwdXQoKSByZW1vdmVGaWxlID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuXG4gICAgcmVtb3ZlRmlsZUxpc3RlbmVyKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUZpbGUgJiYgdGhpcy5yZW1vdmVGaWxlLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsZVR5cGUoKSB7XG4gICAgICAgIGxldCBpbWFnZVR5cGUgPSAvXmltYWdlXFwvLyxcbiAgICAgICAgICAgIHJlYWRlcjtcblxuICAgICAgICBpZiAoIWltYWdlVHlwZS50ZXN0KHRoaXMuZmlsZS50eXBlKSkge1xuICAgICAgICAgICAgbGV0IGV4dCA9IHRoaXMuZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsZU5hbWUgPSB0aGlzLmZpbGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMuZXh0ID0gZXh0Lmxlbmd0aCA+IDNcbiAgICAgICAgICAgICAgICA/ICdmaWxlJ1xuICAgICAgICAgICAgICAgIDogYC4ke2V4dH1gO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSxcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xuXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByYXRpbyA9IGltZy5oZWlnaHQgLyBpbWcud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlZEhlaWdodCA9IHJhdGlvICogdGhpcy5wcmV2aWV3SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3JjID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0hlaWdodCA9IChzY2FsZWRIZWlnaHQgPCB0aGlzLnByZXZpZXdIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcmV2aWV3SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDogc2NhbGVkSGVpZ2h0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHJlc3VsdDtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=