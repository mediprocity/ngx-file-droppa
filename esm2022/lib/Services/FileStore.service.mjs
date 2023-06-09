import { Injectable, EventEmitter } from "@angular/core";
import { FileWrapper } from "./FileWrapper.service";
import * as i0 from "@angular/core";
export class FilesStore {
    constructor() {
        this.filesUpdated = new EventEmitter(true);
        this.startAutoUploading = null;
        this.beforeAddFile = null;
        this.WSfiles = new WeakSet();
        this._iFiles = [];
    }
    get files() {
        return this.iFiles.reduce((res, iFile) => {
            res.push(iFile.File);
            return res;
        }, []);
    }
    get iFiles() {
        return this._iFiles;
    }
    set iFiles(files) {
        this._iFiles = files;
    }
    addFiles(files) {
        files = files.filter((file) => {
            if (!this.WSfiles.has(file)) {
                if (typeof this.beforeAddFile === "function" && this.beforeAddFile(file)) {
                    this.WSfiles.add(file);
                    return true;
                }
                else if (typeof this.beforeAddFile !== "function") {
                    return true;
                }
                return false;
            }
        }).map((file) => {
            let iFile = new FileWrapper(file);
            this.startAutoUploading && this.startAutoUploading(iFile);
            return iFile;
        });
        this.iFiles = [...this.iFiles, ...files];
        this.filesUpdated.emit(true);
    }
    removeFiles(iFile) {
        this.WSfiles.delete(iFile.File);
        this.iFiles = this.iFiles.filter((item) => {
            return item.id !== iFile.id;
        });
        this.filesUpdated.emit(true);
    }
    clearStore() {
        this.iFiles.forEach((iFile) => {
            this.WSfiles.delete(iFile.File);
        });
        this.iFiles = [];
        this.filesUpdated.emit(true);
    }
    static { this.ɵfac = function FilesStore_Factory(t) { return new (t || FilesStore)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilesStore, factory: FilesStore.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilesStore, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsZS1kcm9wcGEvc3JjL2xpYi9TZXJ2aWNlcy9GaWxlU3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBR2xELE1BQU0sT0FBTyxVQUFVO0lBRHZCO1FBRVcsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsa0JBQWEsR0FBTyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLFlBQU8sR0FBZ0IsRUFBRSxDQUFDO0tBb0RyQztJQWxERyxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQVcsRUFBQyxFQUFFO1lBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxNQUFNLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQUs7UUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUcsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDO29CQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU0sSUFBRyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO29CQUNoRCxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNMLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1lBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQVc7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzJFQXpEUSxVQUFVO3VFQUFWLFVBQVUsV0FBVixVQUFVOzt1RkFBVixVQUFVO2NBRHRCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSBcIi4vRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge2lGaWxlfSBmcm9tIFwiLi9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVXcmFwcGVyfSBmcm9tIFwiLi9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlc1N0b3JlIHtcbiAgICBwdWJsaWMgZmlsZXNVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgICBwdWJsaWMgc3RhcnRBdXRvVXBsb2FkaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgYmVmb3JlQWRkRmlsZTphbnkgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBXU2ZpbGVzOldlYWtTZXQ8RmlsZT4gPSBuZXcgV2Vha1NldCgpO1xuICAgIHByaXZhdGUgX2lGaWxlczpBcnJheTxpRmlsZT4gPSBbXTtcblxuICAgIHB1YmxpYyBnZXQgZmlsZXMoKTpBcnJheTxGaWxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlGaWxlcy5yZWR1Y2UoKHJlcywgaUZpbGU6aUZpbGUpPT4ge1xuICAgICAgICAgICAgcmVzLnB1c2goaUZpbGUuRmlsZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpRmlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pRmlsZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgdGhpcy5faUZpbGVzID0gZmlsZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEZpbGVzKGZpbGVzKTp2b2lkIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGUpPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLldTZmlsZXMuaGFzKGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuYmVmb3JlQWRkRmlsZSA9PT0gXCJmdW5jdGlvblwiICYmIHRoaXMuYmVmb3JlQWRkRmlsZShmaWxlKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuV1NmaWxlcy5hZGQoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgdGhpcy5iZWZvcmVBZGRGaWxlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkubWFwKChmaWxlKT0+IHtcbiAgICAgICAgICAgIGxldCBpRmlsZSA9IG5ldyBGaWxlV3JhcHBlcihmaWxlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvVXBsb2FkaW5nICYmIHRoaXMuc3RhcnRBdXRvVXBsb2FkaW5nKGlGaWxlKTtcbiAgICAgICAgICAgIHJldHVybiBpRmlsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaUZpbGVzID0gWy4uLnRoaXMuaUZpbGVzLCAuLi5maWxlc107XG4gICAgICAgIHRoaXMuZmlsZXNVcGRhdGVkLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUZpbGVzKGlGaWxlOmlGaWxlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5XU2ZpbGVzLmRlbGV0ZShpRmlsZS5GaWxlKTtcbiAgICAgICAgdGhpcy5pRmlsZXMgPSB0aGlzLmlGaWxlcy5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCAhPT0gaUZpbGUuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclN0b3JlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaUZpbGVzLmZvckVhY2goKGlGaWxlKT0+IHtcbiAgICAgICAgICAgIHRoaXMuV1NmaWxlcy5kZWxldGUoaUZpbGUuRmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlGaWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KHRydWUpO1xuICAgIH1cbn0iXX0=