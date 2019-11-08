import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RecentMatchesComponent } from './pages/recent-matches/recent-matches.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'recent-matches', component: RecentMatchesComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
