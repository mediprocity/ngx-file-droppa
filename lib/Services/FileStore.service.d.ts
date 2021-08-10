import { EventEmitter } from "@angular/core";
import { iFile } from "./FileWrapper.service";
export declare class FilesStore {
    filesUpdated: EventEmitter<any>;
    startAutoUploading: any;
    beforeAddFile: any;
    private WSfiles;
    private _iFiles;
    get files(): Array<File>;
    get iFiles(): iFile[];
    set iFiles(files: iFile[]);
    addFiles(files: any): void;
    removeFiles(iFile: iFile): void;
    clearStore(): void;
}
