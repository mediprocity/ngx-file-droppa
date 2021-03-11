import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class FileUpload {
    private zone;
    url: any;
    beforeRequest: any;
    beforeFileUpload: any;
    fileUploadedEvent: EventEmitter<any>;
    uploadFiles(iFiles: any): Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
    uploadFile(iFile: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<FileUpload, never>;
    static ɵprov: i0.ɵɵInjectableDef<FileUpload>;
}
//# sourceMappingURL=FileUpload.service.d.ts.map