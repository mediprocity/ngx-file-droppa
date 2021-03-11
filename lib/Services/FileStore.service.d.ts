import { EventEmitter } from "@angular/core";
import { iFile } from "./FileWrapper.service";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<FilesStore, never>;
    static ɵprov: i0.ɵɵInjectableDef<FilesStore>;
}
//# sourceMappingURL=FileStore.service.d.ts.map