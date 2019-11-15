import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Services
import { DataService } from '../../../core/data.service';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
  styleUrls: ['./stats-dialog.component.scss']
})

export class StatsDialogComponent implements OnInit {
  stats: any;
  constructor(
    private data: DataService,
    public dialogRef: MatDialogRef<StatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public player: Player) { }

  ngOnInit() {
    this.data.getRecentMatches(this.player.profile.account_id)
      .subscribe(response => this.setRecentMatches(response, this.player.profile.personaname));
  }
  setRecentMatches(response: any, name: string) {
    const stats = {
      player_name: '',
      matches: [],
      performance: {}
    };
    stats.player_name = name;
    stats.matches = response;
    stats.performance = this.performanceCalculator(response);
    this.stats = stats;
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
  onNoClick = (): void => this.dialogRef.close();
  checkName = (name: string): string => (name === 'AWdC') ? 'Wow, I die alot!' : 'I did okay...';
}
