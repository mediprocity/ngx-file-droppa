import { ElementRef } from '@angular/core';
import { FileParser } from "../Services/FileParser.service";
import { FilesStore } from "../Services/FileStore.service";
import * as i0 from "@angular/core";
export declare class FileDropZone {
    private filesStore;
    private el;
    private fileParser;
    private hiddenFileInput;
    promise: any;
    constructor(filesStore: FilesStore, el: ElementRef, fileParser: FileParser);
    set multiple(value: boolean);
    onClick(e: any): void;
    drop(e: any): void;
    dragenter(e: any): void;
    dragover(e: any): void;
    dragleave(e: any): void;
    OnDestroy(): void;
    updateStyles(dragOver?: boolean): void;
    updateFilesStore(files: Array<File>): void;
    createHiddenInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileDropZone, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileDropZone, "fileDropZone, [fileDropZone]", never, { "multiple": { "alias": "multiple"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=FileDropZone.d.ts.map