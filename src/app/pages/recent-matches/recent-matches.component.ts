import { Component, OnInit } from '@angular/core';
import { OpendotaApiService } from '../../core/opendota-api.service';
import { RecentMatch } from '../../core/models/recent';
import { Hero } from '../../core/models/hero';
import { performance } from 'perf_hooks';

@Component({
  selector: 'app-recent-matches',
  templateUrl: './recent-matches.component.html',
  styleUrls: ['./recent-matches.component.scss']
})
export class RecentMatchesComponent implements OnInit {

  heroes: Array<Hero> = [];
  players: Array<any> = [];
  recentMatchesList = [];

  constructor(private opendota: OpendotaApiService) { }

  ngOnInit() {
    this.players = this.opendota.getPlayers();

    for (const player of this.players) {
      this.opendota.getRecentMatches(player.id).subscribe(x => {
        player.performance = this.performanceCalculator(x);
        this.recentMatchesList.push(player);
      });
    }
    setTimeout(() => {
      console.log(this.recentMatchesList);
    }, 2000);
  }

  calculatePerformance(players) {
    for (const player of players) {
      player.performance = this.performanceCalculator(player.recent_matches);
    }
  }

  performanceCalculator(matches: Array<any>) {
    const result = {
      kills: 0,
      deaths: 0,
      assists: 0,
      gold_per_min: 0,
      xp_per_min: 0,
      last_hits: 0,
      hero_damage: 0,
      tower_damage: 0,
      hero_healing: 0,
    };

    result.kills = matches.map(a => a.kills).reduce((a, b) => a + b) / matches.length;
    result.deaths = matches.map(a => a.deaths).reduce((a, b) => a + b) / matches.length;
    result.assists = matches.map(a => a.assists).reduce((a, b) => a + b) / matches.length;
    result.gold_per_min = matches.map(a => a.gold_per_min).reduce((a, b) => a + b) / matches.length;
    result.xp_per_min = matches.map(a => a.xp_per_min).reduce((a, b) => a + b) / matches.length;
    result.hero_damage = matches.map(a => a.hero_damage).reduce((a, b) => a + b) / matches.length;
    result.tower_damage = matches.map(a => a.tower_damage).reduce((a, b) => a + b) / matches.length;
    result.hero_healing = matches.map(a => a.hero_healing).reduce((a, b) => a + b) / matches.length;

    return result;
  }
}
