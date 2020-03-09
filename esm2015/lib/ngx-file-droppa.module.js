import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FileDroppa as FileDroppaComponent } from "./Directives/FileDroppa";
import { File } from "./Directives/File";
import { FileDropZone } from "./Directives/FileDropZone";
import { FileList } from "./Directives/FileList";
import { GetSizePipe } from "./Pipes/GetSize.pipe";
let NgxFileDroppaModule = class NgxFileDroppaModule {
};
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
export { NgxFileDroppaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGUtZHJvcHBhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1maWxlLWRyb3BwYS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZmlsZS1kcm9wcGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxJQUFJLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBb0JqRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUUvQixDQUFBO0FBRlksbUJBQW1CO0lBbEIvQixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLElBQUk7WUFDSixZQUFZO1lBQ1osUUFBUTtTQUNUO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CO1lBQ25CLElBQUk7WUFDSixZQUFZO1lBQ1osUUFBUTtTQUNUO0tBQ0osQ0FBQztHQUNXLG1CQUFtQixDQUUvQjtTQUZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmlsZURyb3BwYSBhcyBGaWxlRHJvcHBhQ29tcG9uZW50IH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9GaWxlRHJvcHBhXCI7XG5pbXBvcnQge0ZpbGV9IGZyb20gXCIuL0RpcmVjdGl2ZXMvRmlsZVwiO1xuaW1wb3J0IHtGaWxlRHJvcFpvbmV9IGZyb20gXCIuL0RpcmVjdGl2ZXMvRmlsZURyb3Bab25lXCI7XG5pbXBvcnQge0ZpbGVMaXN0fSBmcm9tIFwiLi9EaXJlY3RpdmVzL0ZpbGVMaXN0XCI7XG5pbXBvcnQge0dldFNpemVQaXBlfSBmcm9tIFwiLi9QaXBlcy9HZXRTaXplLnBpcGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIEdldFNpemVQaXBlLFxuICAgICAgRmlsZURyb3BwYUNvbXBvbmVudCxcbiAgICAgIEZpbGUsXG4gICAgICBGaWxlRHJvcFpvbmUsXG4gICAgICBGaWxlTGlzdFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgRmlsZURyb3BwYUNvbXBvbmVudCxcbiAgICAgIEZpbGUsXG4gICAgICBGaWxlRHJvcFpvbmUsXG4gICAgICBGaWxlTGlzdFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEZpbGVEcm9wcGFNb2R1bGUge1xuXG59XG4iXX0=