import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

// App Components
import { AppComponent } from './app.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
