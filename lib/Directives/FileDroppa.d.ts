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
    static ɵfac: i0.ɵɵFactoryDeclaration<FileDroppa, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileDroppa, "fileDroppa", never, { "showFilesList": { "alias": "showFilesList"; "required": false; }; "autoUpload": { "alias": "autoUpload"; "required": false; }; "beforeRequest": { "alias": "beforeRequest"; "required": false; }; "url": { "alias": "url"; "required": false; }; "beforeFileUpload": { "alias": "beforeFileUpload"; "required": false; }; "beforeAddFile": { "alias": "beforeAddFile"; "required": false; }; "dropZoneTemplate": { "alias": "dropZoneTemplate"; "required": false; }; "uploadButtonTemplate": { "alias": "uploadButtonTemplate"; "required": false; }; "removeButtonTemplate": { "alias": "removeButtonTemplate"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; }, { "filesUpdated": "filesUpdated"; "fileUploaded": "fileUploaded"; }, never, ["*", "[upload-button]", "[remove-button]"], false, never>;
}
//# sourceMappingURL=FileDroppa.d.ts.map