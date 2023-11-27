import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/*
 * Converts bytes to MB, GB and so on
 * Takes an bytes value argument that defaults to 0.
 * Usage:
 *   value | getSize
 * Example:
 *   {{ 1024 |  getSize}}
 *   formats to: 1 MB
 */
export class GetSizePipe {
    transform(value) {
        let bytes = value || 0, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
        if (bytes === 0) {
            return '0 Byte';
        }
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }
    static { this.ɵfac = function GetSizePipe_Factory(t) { return new (t || GetSizePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "getSize", type: GetSizePipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GetSizePipe, [{
        type: Pipe,
        args: [{ name: 'getSize' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0U2l6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvUGlwZXMvR2V0U2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUNsRDs7Ozs7Ozs7R0FRRztBQUVILE1BQU0sT0FBTyxXQUFXO0lBQ3BCLFNBQVMsQ0FBQyxLQUFZO1FBQ2xCLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQ2xCLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQ2pFLENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLENBQUM7U0FDbkI7UUFFRCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs0RUFaUSxXQUFXO2lGQUFYLFdBQVc7O2lGQUFYLFdBQVc7Y0FEdkIsSUFBSTtlQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKlxuICogQ29udmVydHMgYnl0ZXMgdG8gTUIsIEdCIGFuZCBzbyBvbiBcbiAqIFRha2VzIGFuIGJ5dGVzIHZhbHVlIGFyZ3VtZW50IHRoYXQgZGVmYXVsdHMgdG8gMC5cbiAqIFVzYWdlOlxuICogICB2YWx1ZSB8IGdldFNpemVcbiAqIEV4YW1wbGU6XG4gKiAgIHt7IDEwMjQgfCAgZ2V0U2l6ZX19XG4gKiAgIGZvcm1hdHMgdG86IDEgTUJcbiAqL1xuQFBpcGUoe25hbWU6ICdnZXRTaXplJ30pXG5leHBvcnQgY2xhc3MgR2V0U2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICBsZXQgYnl0ZXMgPSB2YWx1ZSB8fCAwLFxuICAgICAgICAgICAgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ10sXG4gICAgICAgICAgICBrID0gMTAwMCxcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcblxuICAgICAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnMCBCeXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9QcmVjaXNpb24oMykgKyAnICcgKyBzaXplc1tpXTtcbiAgICB9XG59Il19