import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App Modules
import { AppRoutingModule } from './app.routes';
import { MaterialModule } from './shared/material.module';

// App Components
import { AppComponent } from './app.component';
import { ShadeDialogComponent } from './pages/components/shade-dialog/shade-dialog.component';

// Layouts
import { MainLayout } from './shared/layouts/main/main.layout';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Services
import { OpendotaApiService } from './core/opendota-api.service';
import { ThrowShadeService } from './core/throw-shade.service';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RecentMatchesComponent } from './pages/recent-matches/recent-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayout,
    DashboardComponent,
    RankingComponent,
    ShadeDialogComponent,
    RecentMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  entryComponents: [
    DashboardComponent,
    ShadeDialogComponent
  ],
  providers: [
    OpendotaApiService,
    ThrowShadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
