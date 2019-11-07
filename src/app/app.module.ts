import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

// App Components
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Services
import { OpendotaApiService } from './core/opendota-api.service';
import { ThrowShadeService } from './core/throw-shade.service';
import { RankingComponent } from './pages/ranking/ranking.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoadingComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [
    OpendotaApiService,
    ThrowShadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
