import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FileDroppa as FileDroppaComponent } from "./Directives/FileDroppa";
import { File } from "./Directives/File";
import { FileDropZone } from "./Directives/FileDropZone";
import { FileList } from "./Directives/FileList";
import { GetSizePipe } from "./Pipes/GetSize.pipe";
var NgxFileDroppaModule = /** @class */ (function () {
    function NgxFileDroppaModule() {
    }
    NgxFileDroppaModule = __decorate([
        NgModule({
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
        })
    ], NgxFileDroppaModule);
    return NgxFileDroppaModule;
}());
export { NgxFileDroppaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGUtZHJvcHBhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1maWxlLWRyb3BwYS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZmlsZS1kcm9wcGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxJQUFJLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBb0JqRDtJQUFBO0lBRUEsQ0FBQztJQUZZLG1CQUFtQjtRQWxCL0IsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsSUFBSTtnQkFDSixZQUFZO2dCQUNaLFFBQVE7YUFDVDtZQUNELE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7Z0JBQ25CLElBQUk7Z0JBQ0osWUFBWTtnQkFDWixRQUFRO2FBQ1Q7U0FDSixDQUFDO09BQ1csbUJBQW1CLENBRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZpbGVEcm9wcGEgYXMgRmlsZURyb3BwYUNvbXBvbmVudCB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvRmlsZURyb3BwYVwiO1xuaW1wb3J0IHtGaWxlfSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVcIjtcbmltcG9ydCB7RmlsZURyb3Bab25lfSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVEcm9wWm9uZVwiO1xuaW1wb3J0IHtGaWxlTGlzdH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9GaWxlTGlzdFwiO1xuaW1wb3J0IHtHZXRTaXplUGlwZX0gZnJvbSBcIi4vUGlwZXMvR2V0U2l6ZS5waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBHZXRTaXplUGlwZSxcbiAgICAgIEZpbGVEcm9wcGFDb21wb25lbnQsXG4gICAgICBGaWxlLFxuICAgICAgRmlsZURyb3Bab25lLFxuICAgICAgRmlsZUxpc3RcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIEZpbGVEcm9wcGFDb21wb25lbnQsXG4gICAgICBGaWxlLFxuICAgICAgRmlsZURyb3Bab25lLFxuICAgICAgRmlsZUxpc3RcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGaWxlRHJvcHBhTW9kdWxlIHtcblxufVxuIl19