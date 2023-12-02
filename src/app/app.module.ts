import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { TableDescriptionComponent } from './table-description/table-description.component';
import { TableDeforestationComponent } from './table-deforestation/table-deforestation.component';
import { TableAfforestationAndReforestationComponent } from './table-afforestation-and-reforestation/table-afforestation-and-reforestation.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { TableGrasslandComponent } from './table-grassland/table-grassland.component';
import { LandUseChangesComponent } from './land-use-changes/land-use-changes.component';
import { FormsModule } from '@angular/forms';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports     : [
         BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
