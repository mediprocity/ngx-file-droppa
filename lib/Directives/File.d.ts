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
    static ɵfac: i0.ɵɵFactoryDef<File, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<File, "fileItem", never, { "file": "file"; "index": "index"; "percentage": "percentage"; "loadingSuccessful": "loadingSuccessful"; "responseMessage": "responseMessage"; }, { "removeFile": "removeFile"; }, never, never>;
}
//# sourceMappingURL=File.d.ts.map