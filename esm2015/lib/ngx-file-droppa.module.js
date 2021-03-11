import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FileDroppa as FileDroppaComponent } from "./Directives/FileDroppa";
import { File } from "./Directives/File";
import { FileDropZone } from "./Directives/FileDropZone";
import { FileList } from "./Directives/FileList";
import { GetSizePipe } from "./Pipes/GetSize.pipe";
import * as i0 from "@angular/core";
export class NgxFileDroppaModule {
}
NgxFileDroppaModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxFileDroppaModule });
NgxFileDroppaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxFileDroppaModule_Factory(t) { return new (t || NgxFileDroppaModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFileDroppaModule, { declarations: [GetSizePipe,
        FileDroppaComponent,
        File,
        FileDropZone,
        FileList], imports: [CommonModule], exports: [FileDroppaComponent,
        File,
        FileDropZone,
        FileList] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGUtZHJvcHBhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maWxlLWRyb3BwYS9zcmMvbGliL25neC1maWxlLWRyb3BwYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFvQmpELE1BQU0sT0FBTyxtQkFBbUI7O3VEQUFuQixtQkFBbUI7cUhBQW5CLG1CQUFtQixrQkFqQm5CO1lBQ1AsWUFBWTtTQUNiO3dGQWVRLG1CQUFtQixtQkFiMUIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixJQUFJO1FBQ0osWUFBWTtRQUNaLFFBQVEsYUFQUixZQUFZLGFBVVosbUJBQW1CO1FBQ25CLElBQUk7UUFDSixZQUFZO1FBQ1osUUFBUTt1RkFHRCxtQkFBbUI7Y0FsQi9CLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLElBQUk7b0JBQ0osWUFBWTtvQkFDWixRQUFRO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLElBQUk7b0JBQ0osWUFBWTtvQkFDWixRQUFRO2lCQUNUO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZpbGVEcm9wcGEgYXMgRmlsZURyb3BwYUNvbXBvbmVudCB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvRmlsZURyb3BwYVwiO1xuaW1wb3J0IHtGaWxlfSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVcIjtcbmltcG9ydCB7RmlsZURyb3Bab25lfSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVEcm9wWm9uZVwiO1xuaW1wb3J0IHtGaWxlTGlzdH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9GaWxlTGlzdFwiO1xuaW1wb3J0IHtHZXRTaXplUGlwZX0gZnJvbSBcIi4vUGlwZXMvR2V0U2l6ZS5waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBHZXRTaXplUGlwZSxcbiAgICAgIEZpbGVEcm9wcGFDb21wb25lbnQsXG4gICAgICBGaWxlLFxuICAgICAgRmlsZURyb3Bab25lLFxuICAgICAgRmlsZUxpc3RcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIEZpbGVEcm9wcGFDb21wb25lbnQsXG4gICAgICBGaWxlLFxuICAgICAgRmlsZURyb3Bab25lLFxuICAgICAgRmlsZUxpc3RcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGaWxlRHJvcHBhTW9kdWxlIHtcblxufVxuIl19