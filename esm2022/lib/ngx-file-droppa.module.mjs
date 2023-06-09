import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FileDroppa as FileDroppaComponent } from "./Directives/FileDroppa";
import { File } from "./Directives/File";
import { FileDropZone } from "./Directives/FileDropZone";
import { FileList } from "./Directives/FileList";
import { GetSizePipe } from "./Pipes/GetSize.pipe";
import * as i0 from "@angular/core";
export class NgxFileDroppaModule {
    static { this.ɵfac = function NgxFileDroppaModule_Factory(t) { return new (t || NgxFileDroppaModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxFileDroppaModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFileDroppaModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    GetSizePipe,
                    FileDroppaComponent,
                    File,
                    FileDropZone,
                    FileList
                ],
                exports: [
                    FileDroppaComponent,
                    File,
                    FileDropZone,
                    FileList
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFileDroppaModule, { declarations: [GetSizePipe,
        FileDroppaComponent,
        File,
        FileDropZone,
        FileList], imports: [CommonModule], exports: [FileDroppaComponent,
        File,
        FileDropZone,
        FileList] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGUtZHJvcHBhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL25neC1maWxlLWRyb3BwYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFvQmpELE1BQU0sT0FBTyxtQkFBbUI7b0ZBQW5CLG1CQUFtQjttRUFBbkIsbUJBQW1CO3VFQWhCMUIsWUFBWTs7dUZBZ0JMLG1CQUFtQjtjQWxCL0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsSUFBSTtvQkFDSixZQUFZO29CQUNaLFFBQVE7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsSUFBSTtvQkFDSixZQUFZO29CQUNaLFFBQVE7aUJBQ1Q7YUFDSjs7d0ZBQ1ksbUJBQW1CLG1CQWIxQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLElBQUk7UUFDSixZQUFZO1FBQ1osUUFBUSxhQVBSLFlBQVksYUFVWixtQkFBbUI7UUFDbkIsSUFBSTtRQUNKLFlBQVk7UUFDWixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGaWxlRHJvcHBhIGFzIEZpbGVEcm9wcGFDb21wb25lbnQgfSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVEcm9wcGFcIjtcbmltcG9ydCB7RmlsZX0gZnJvbSBcIi4vRGlyZWN0aXZlcy9GaWxlXCI7XG5pbXBvcnQge0ZpbGVEcm9wWm9uZX0gZnJvbSBcIi4vRGlyZWN0aXZlcy9GaWxlRHJvcFpvbmVcIjtcbmltcG9ydCB7RmlsZUxpc3R9IGZyb20gXCIuL0RpcmVjdGl2ZXMvRmlsZUxpc3RcIjtcbmltcG9ydCB7R2V0U2l6ZVBpcGV9IGZyb20gXCIuL1BpcGVzL0dldFNpemUucGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgR2V0U2l6ZVBpcGUsXG4gICAgICBGaWxlRHJvcHBhQ29tcG9uZW50LFxuICAgICAgRmlsZSxcbiAgICAgIEZpbGVEcm9wWm9uZSxcbiAgICAgIEZpbGVMaXN0XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICBGaWxlRHJvcHBhQ29tcG9uZW50LFxuICAgICAgRmlsZSxcbiAgICAgIEZpbGVEcm9wWm9uZSxcbiAgICAgIEZpbGVMaXN0XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RmlsZURyb3BwYU1vZHVsZSB7XG5cbn1cbiJdfQ==