import { EventEmitter } from '@angular/core';
import { FilesStore } from "../Services/FileStore.service";
import { FileUpload } from "../Services/FileUpload.service";
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
}
