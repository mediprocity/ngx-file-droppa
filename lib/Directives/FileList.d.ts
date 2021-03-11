import { FilesStore } from "../Services/FileStore.service";
import { iFile } from "../Services/FileWrapper.service";
import * as i0 from "@angular/core";
export declare class FileList {
    filesStore: FilesStore;
    constructor(filesStore: FilesStore);
    removeFile(iFile: iFile): void;
    static ɵfac: i0.ɵɵFactoryDef<FileList, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FileList, "fileList, [fileList]", never, {}, {}, never, never>;
}
//# sourceMappingURL=FileList.d.ts.map