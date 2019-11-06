import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

// App Components
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OpendotaApiService } from './core/opendota-api.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [OpendotaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
