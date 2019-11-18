import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeastValuablePlayerComponent } from './pages/least-valuable-player/least-valuable-player.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lvp', component: LeastValuablePlayerComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
