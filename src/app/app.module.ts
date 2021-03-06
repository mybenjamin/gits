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
import { StatsDialogComponent } from './pages/components/stats-dialog/stats-dialog.component';

// Layouts
import { MainLayout, SnackBarComponent } from './shared/layouts/main/main.layout';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeastValuablePlayerComponent } from './pages/least-valuable-player/least-valuable-player.component';

// Services
import { DataService } from './core/data.service';
import { LocalstorageService } from './core/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayout,
    DashboardComponent,
    ShadeDialogComponent,
    StatsDialogComponent,
    SnackBarComponent,
    LeastValuablePlayerComponent
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
    ShadeDialogComponent,
    StatsDialogComponent,
    SnackBarComponent
  ],
  providers: [
    DataService,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
