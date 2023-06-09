import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class File {
    ext: string;
    previewSrc: string;
    fileName: string;
    previewHeight: number;
    ngAfterContentInit(): void;
    file: any;
    index: any;
    percentage: any;
    loadingSuccessful: any;
    responseMessage: any;
    removeFile: EventEmitter<any>;
    removeFileListener(e: any): void;
    getFileType(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<File, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<File, "fileItem", never, { "file": { "alias": "file"; "required": false; }; "index": { "alias": "index"; "required": false; }; "percentage": { "alias": "percentage"; "required": false; }; "loadingSuccessful": { "alias": "loadingSuccessful"; "required": false; }; "responseMessage": { "alias": "responseMessage"; "required": false; }; }, { "removeFile": "removeFile"; }, never, never, false, never>;
}
//# sourceMappingURL=File.d.ts.map