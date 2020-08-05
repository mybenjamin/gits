import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatePerformanceService {

  constructor() { }

  setRecentMatches(response: any, name: string) {
    const stats = {
      player_name: '',
      performance: {}
    };
    stats.player_name = name;
    stats.performance = this.performanceCalculator(response);
    return stats;
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
