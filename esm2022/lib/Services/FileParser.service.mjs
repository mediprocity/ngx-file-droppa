import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class FileParser {
    processFilesFromInput(items) {
        let newFiles = Object.keys(items).reduce((result, key) => {
            let entry, item = items[key];
            if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                if (entry.isFile) {
                    result.push(Promise.resolve(item.getAsFile()));
                }
                else if (entry.isDirectory) {
                    result.push(this.processDirectory(entry));
                }
            }
            else if (item.getAsFile != null) {
                if ((item.kind == null) || item.kind === "file") {
                    result.push(Promise.resolve(item.getAsFile()));
                }
            }
            else if (item.isFile) {
                let pr = new Promise((resolve, reject) => {
                    item.file(resolve, reject);
                });
                result.push(pr);
            }
            else if (item.isDirectory) {
                result.push(this.processDirectory(item));
            }
            return result;
        }, []);
        return Promise.all(newFiles).then(this.flattenArrayOfFiles);
    }
    processDirectory(directory) {
        let dirReader = directory.createReader(), result = [];
        var readEntries = () => {
            return new Promise((resolve, reject) => {
                dirReader.readEntries((entries) => {
                    let pr = [];
                    if (entries.length) {
                        for (var i = 0; i < entries.length; i++) {
                            pr.push(this.processFilesFromInput({ 0: entries[i] }));
                        }
                    }
                    else {
                        resolve(null);
                    }
                    result.push(readEntries());
                    Promise.all(pr).then(this.flattenArrayOfFiles).then(resolve);
                }, (error) => {
                    reject("Error while reading folder");
                });
            });
        };
        result.push(readEntries());
        return Promise.all(result).then(this.flattenArrayOfFiles);
    }
    processInputFromDrop(e) {
        let items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
            return Promise.resolve(this.processFilesFromInput(items));
        }
        else if (items && items.length && !items[0].webkitGetAsEntry) {
            return Promise.resolve(items);
        }
        else if (e.dataTransfer.files) {
            let files = [];
            for (let i = 0, l = e.dataTransfer.files.length; i < l; i++) {
                files.push(e.dataTransfer.files[i]);
            }
            return Promise.resolve(files);
        }
    }
    flattenArrayOfFiles(arrayOfPromises) {
        return Promise.resolve(arrayOfPromises.reduce((result, file) => {
            if (file) {
                return [...result, ...[file]];
            }
        }, []));
    }
    static { this.ɵfac = function FileParser_Factory(t) { return new (t || FileParser)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FileParser, factory: FileParser.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileParser, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVBhcnNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvU2VydmljZXMvRmlsZVBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE1BQU0sT0FBTyxVQUFVO0lBQ25CLHFCQUFxQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLEVBQUU7WUFDcEQsSUFBSSxLQUFLLEVBQ0wsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8s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Z0IsRUFBRTtZQUM1RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDaEM7YUFBTSxJQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztnQkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELG1CQUFtQixDQUFDLGVBQWU7UUFDL0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDOzJFQWhGUSxVQUFVO3VFQUFWLFVBQVUsV0FBVixVQUFVOzt1RkFBVixVQUFVO2NBRHRCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZVBhcnNlciB7XG4gICAgcHJvY2Vzc0ZpbGVzRnJvbUlucHV0KGl0ZW1zKSB7XG4gICAgICAgIGxldCBuZXdGaWxlcyA9IE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoKHJlc3VsdCwga2V5KT0+IHtcbiAgICAgICAgICAgIGxldCBlbnRyeSxcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKChpdGVtLndlYmtpdEdldEFzRW50cnkgIT0gbnVsbCkgJiYgKGVudHJ5ID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChQcm9taXNlLnJlc29sdmUoaXRlbS5nZXRBc0ZpbGUoKSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5wcm9jZXNzRGlyZWN0b3J5KGVudHJ5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEFzRmlsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLmtpbmQgPT0gbnVsbCkgfHwgaXRlbS5raW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChQcm9taXNlLnJlc29sdmUoaXRlbS5nZXRBc0ZpbGUoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5pc0ZpbGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5maWxlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5wcm9jZXNzRGlyZWN0b3J5KGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3RmlsZXMpLnRoZW4odGhpcy5mbGF0dGVuQXJyYXlPZkZpbGVzKVxuICAgIH1cblxuICAgIHByb2Nlc3NEaXJlY3RvcnkoZGlyZWN0b3J5KSB7XG4gICAgICAgIGxldCBkaXJSZWFkZXIgPSBkaXJlY3RvcnkuY3JlYXRlUmVhZGVyKCksXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgICB2YXIgcmVhZEVudHJpZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICAgICAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwciA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHIucHVzaCh0aGlzLnByb2Nlc3NGaWxlc0Zyb21JbnB1dCh7MDogZW50cmllc1tpXX0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmVhZEVudHJpZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHByKS50aGVuKHRoaXMuZmxhdHRlbkFycmF5T2ZGaWxlcykudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFcnJvciB3aGlsZSByZWFkaW5nIGZvbGRlclwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVzdWx0LnB1c2gocmVhZEVudHJpZXMoKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHQpLnRoZW4odGhpcy5mbGF0dGVuQXJyYXlPZkZpbGVzKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzSW5wdXRGcm9tRHJvcChlKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IGUuZGF0YVRyYW5zZmVyLml0ZW1zO1xuXG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggJiYgKGl0ZW1zWzBdLndlYmtpdEdldEFzRW50cnkgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9jZXNzRmlsZXNGcm9tSW5wdXQoaXRlbXMpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggJiYgIWl0ZW1zWzBdLndlYmtpdEdldEFzRW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbXMpXG4gICAgICAgIH0gZWxzZSBpZihlLmRhdGFUcmFuc2Zlci5maWxlcyl7XG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7aTxsO2krKyl7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChlLmRhdGFUcmFuc2Zlci5maWxlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsYXR0ZW5BcnJheU9mRmlsZXMoYXJyYXlPZlByb21pc2VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXJyYXlPZlByb21pc2VzLnJlZHVjZSgocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LCAuLi5bZmlsZV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSkpO1xuICAgIH1cbn1cbiJdfQ==