import { Pipe } from '@angular/core';
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
}
GetSizePipe.decorators = [
    { type: Pipe, args: [{ name: 'getSize' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0U2l6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbGUtZHJvcHBhL3NyYy9saWIvUGlwZXMvR2V0U2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xEOzs7Ozs7OztHQVFHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFDcEIsU0FBUyxDQUFDLEtBQVk7UUFDbEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFDbEIsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDakUsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUVELE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUFiSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qXG4gKiBDb252ZXJ0cyBieXRlcyB0byBNQiwgR0IgYW5kIHNvIG9uIFxuICogVGFrZXMgYW4gYnl0ZXMgdmFsdWUgYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAwLlxuICogVXNhZ2U6XG4gKiAgIHZhbHVlIHwgZ2V0U2l6ZVxuICogRXhhbXBsZTpcbiAqICAge3sgMTAyNCB8ICBnZXRTaXplfX1cbiAqICAgZm9ybWF0cyB0bzogMSBNQlxuICovXG5AUGlwZSh7bmFtZTogJ2dldFNpemUnfSlcbmV4cG9ydCBjbGFzcyBHZXRTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTpudW1iZXIpOnN0cmluZyB7XG4gICAgICAgIGxldCBieXRlcyA9IHZhbHVlIHx8IDAsXG4gICAgICAgICAgICBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXSxcbiAgICAgICAgICAgIGsgPSAxMDAwLFxuICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gICAgICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcwIEJ5dGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b1ByZWNpc2lvbigzKSArICcgJyArIHNpemVzW2ldO1xuICAgIH1cbn0iXX0=