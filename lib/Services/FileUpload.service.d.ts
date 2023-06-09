import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class FileUpload {
    private zone;
    url: any;
    beforeRequest: any;
    beforeFileUpload: any;
    fileUploadedEvent: EventEmitter<any>;
    uploadFiles(iFiles: any): Promise<any[]>;
    uploadFile(iFile: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUpload, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileUpload>;
}
//# sourceMappingURL=FileUpload.service.d.ts.map