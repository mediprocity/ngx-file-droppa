import { EventEmitter } from "@angular/core";
export declare class FileUpload {
    private zone;
    url: any;
    beforeRequest: any;
    beforeFileUpload: any;
    fileUploadedEvent: EventEmitter<any>;
    uploadFiles(iFiles: any): Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
    uploadFile(iFile: any): Promise<void>;
}
