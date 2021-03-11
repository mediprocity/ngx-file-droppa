import { EventEmitter } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
import * as i0 from "@angular/core";
export declare class FileDroppa {
    filesStore: FilesStore;
    private fileUploadService;
    showFilesList: boolean;
    autoUpload: boolean;
    beforeRequest: Function;
    set url(tmpUrl: string);
    beforeFileUpload: Function;
    beforeAddFile: Function;
    dropZoneTemplate: string;
    filesUpdated: EventEmitter<any>;
    fileUploaded: EventEmitter<any>;
    uploadButtonTemplate: string;
    removeButtonTemplate: string;
    multiple: boolean;
    constructor(filesStore: FilesStore, fileUploadService: FileUpload);
    private startAutoUploading;
    /**
     * We got to pass Input parameters to Service instances
     */
    ngOnInit(): void;
    removeAllFiles(): void;
    uploadAllFiles(): void;
    static ɵfac: i0.ɵɵFactoryDef<FileDroppa, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FileDroppa, "fileDroppa", never, { "showFilesList": "showFilesList"; "autoUpload": "autoUpload"; "beforeRequest": "beforeRequest"; "url": "url"; "beforeFileUpload": "beforeFileUpload"; "beforeAddFile": "beforeAddFile"; "dropZoneTemplate": "dropZoneTemplate"; "uploadButtonTemplate": "uploadButtonTemplate"; "removeButtonTemplate": "removeButtonTemplate"; "multiple": "multiple"; }, { "filesUpdated": "filesUpdated"; "fileUploaded": "fileUploaded"; }, never, ["*", "[upload-button]", "[remove-button]"]>;
}
//# sourceMappingURL=FileDroppa.d.ts.map