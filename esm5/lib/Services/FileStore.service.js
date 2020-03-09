import { __decorate, __read, __spread } from "tslib";
import { Injectable, EventEmitter } from "@angular/core";
import { FileWrapper } from "./FileWrapper.service";
var FilesStore = /** @class */ (function () {
    function FilesStore() {
        this.filesUpdated = new EventEmitter(true);
        this.startAutoUploading = null;
        this.beforeAddFile = null;
        this.WSfiles = new WeakSet();
        this._iFiles = [];
    }
    Object.defineProperty(FilesStore.prototype, "files", {
        get: function () {
            return this.iFiles.reduce(function (res, iFile) {
                res.push(iFile.File);
                return res;
            }, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesStore.prototype, "iFiles", {
        get: function () {
            return this._iFiles;
        },
        set: function (files) {
            this._iFiles = files;
        },
        enumerable: true,
        configurable: true
    });
    FilesStore.prototype.addFiles = function (files) {
        var _this = this;
        files = files.filter(function (file) {
            if (!_this.WSfiles.has(file)) {
                if (typeof _this.beforeAddFile === "function" && _this.beforeAddFile(file)) {
                    _this.WSfiles.add(file);
                    return true;
                }
                else if (typeof _this.beforeAddFile !== "function") {
                    return true;
                }
                return false;
            }
        }).map(function (file) {
            var iFile = new FileWrapper(file);
            _this.startAutoUploading && _this.startAutoUploading(iFile);
            return iFile;
        });
        this.iFiles = __spread(this.iFiles, files);
        this.filesUpdated.emit(true);
    };
    FilesStore.prototype.removeFiles = function (iFile) {
        this.WSfiles.delete(iFile.File);
        this.iFiles = this.iFiles.filter(function (item) {
            return item.id !== iFile.id;
        });
        this.filesUpdated.emit(true);
    };
    FilesStore.prototype.clearStore = function () {
        var _this = this;
        this.iFiles.forEach(function (iFile) {
            _this.WSfiles.delete(iFile.File);
        });
        this.iFiles = [];
        this.filesUpdated.emit(true);
    };
    FilesStore = __decorate([
        Injectable()
    ], FilesStore);
    return FilesStore;
}());
export { FilesStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmlsZS1kcm9wcGEvIiwic291cmNlcyI6WyJsaWIvU2VydmljZXMvRmlsZVN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUdsRDtJQUFBO1FBQ1csaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsa0JBQWEsR0FBTyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLFlBQU8sR0FBZ0IsRUFBRSxDQUFDO0lBb0R0QyxDQUFDO0lBbERHLHNCQUFXLDZCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFXO2dCQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDhCQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFrQixLQUFLO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTU0sNkJBQVEsR0FBZixVQUFnQixLQUFLO1FBQXJCLGlCQWtCQztRQWpCRyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDdEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFHLE9BQU8sS0FBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQztvQkFDcEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNLElBQUcsT0FBTyxLQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsRUFBRTtvQkFDaEQsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLFlBQU8sSUFBSSxDQUFDLE1BQU0sRUFBSyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsS0FBVztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUk7WUFDbEMsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sK0JBQVUsR0FBakI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBekRRLFVBQVU7UUFEdEIsVUFBVSxFQUFFO09BQ0EsVUFBVSxDQTBEdEI7SUFBRCxpQkFBQztDQUFBLEFBMURELElBMERDO1NBMURZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSBcIi4vRmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge2lGaWxlfSBmcm9tIFwiLi9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGVXcmFwcGVyfSBmcm9tIFwiLi9GaWxlV3JhcHBlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlc1N0b3JlIHtcbiAgICBwdWJsaWMgZmlsZXNVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgICBwdWJsaWMgc3RhcnRBdXRvVXBsb2FkaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgYmVmb3JlQWRkRmlsZTphbnkgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBXU2ZpbGVzOldlYWtTZXQ8RmlsZT4gPSBuZXcgV2Vha1NldCgpO1xuICAgIHByaXZhdGUgX2lGaWxlczpBcnJheTxpRmlsZT4gPSBbXTtcblxuICAgIHB1YmxpYyBnZXQgZmlsZXMoKTpBcnJheTxGaWxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlGaWxlcy5yZWR1Y2UoKHJlcywgaUZpbGU6aUZpbGUpPT4ge1xuICAgICAgICAgICAgcmVzLnB1c2goaUZpbGUuRmlsZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpRmlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pRmlsZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgdGhpcy5faUZpbGVzID0gZmlsZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEZpbGVzKGZpbGVzKTp2b2lkIHtcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5maWx0ZXIoKGZpbGUpPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLldTZmlsZXMuaGFzKGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuYmVmb3JlQWRkRmlsZSA9PT0gXCJmdW5jdGlvblwiICYmIHRoaXMuYmVmb3JlQWRkRmlsZShmaWxlKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuV1NmaWxlcy5hZGQoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgdGhpcy5iZWZvcmVBZGRGaWxlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkubWFwKChmaWxlKT0+IHtcbiAgICAgICAgICAgIGxldCBpRmlsZSA9IG5ldyBGaWxlV3JhcHBlcihmaWxlKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvVXBsb2FkaW5nICYmIHRoaXMuc3RhcnRBdXRvVXBsb2FkaW5nKGlGaWxlKTtcbiAgICAgICAgICAgIHJldHVybiBpRmlsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaUZpbGVzID0gWy4uLnRoaXMuaUZpbGVzLCAuLi5maWxlc107XG4gICAgICAgIHRoaXMuZmlsZXNVcGRhdGVkLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUZpbGVzKGlGaWxlOmlGaWxlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5XU2ZpbGVzLmRlbGV0ZShpRmlsZS5GaWxlKTtcbiAgICAgICAgdGhpcy5pRmlsZXMgPSB0aGlzLmlGaWxlcy5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCAhPT0gaUZpbGUuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclN0b3JlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaUZpbGVzLmZvckVhY2goKGlGaWxlKT0+IHtcbiAgICAgICAgICAgIHRoaXMuV1NmaWxlcy5kZWxldGUoaUZpbGUuRmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlGaWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzVXBkYXRlZC5lbWl0KHRydWUpO1xuICAgIH1cbn0iXX0=