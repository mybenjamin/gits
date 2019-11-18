import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { CalculatePerformanceService } from 'src/app/core/calculate-performance.service';

@Component({
  selector: 'app-least-valuable-player',
  templateUrl: './least-valuable-player.component.html',
  styleUrls: ['./least-valuable-player.component.scss']
})
export class LeastValuablePlayerComponent implements OnInit {

  list: Array<any> = [];
  lvp: any;
  lvpAccount: any;
  display: string;

  constructor(
    private data: DataService,
    private calulator: CalculatePerformanceService) { }

  ngOnInit() {
    for (const player of this.data.players) {
      this.data.getRecentMatches(player.id)
        .subscribe(response => {
          // console.log(this.calulator.setRecentMatches(response, player.name));
          this.list.push(this.calulator.setRecentMatches(response, player.name));
        });
    }
    this.lvp = this.calculateLvp(this.list);
    const account = this.data.players.filter(x => x.name === this.lvp.player_name).pop();
    this.data.getPlayerProfile(account.id).subscribe(x => this.lvpAccount = x);
    // console.log(this.lvpAccount);
    this.showElement();
  }

  calculateLvp(players: any) {
    const kills = players.sort((a, b) => b.performance.kills - a.performance.kills).pop();
    // const deaths = this.list.sort((a, b) => a.performance.deaths - b.performance.deaths).pop();
    // const assists = this.list.sort((a, b) => a.performance.assists - b.performance.assists).pop();
    // const gpm = this.list.sort((a, b) => b.performance.gold_per_min - a.performance.gold_per_min).pop();
    // const xpm = this.list.sort((a, b) => a.performance.xp_per_min - b.performance.xp_per_min).pop();
    return kills; // { kills, deaths, assists, gpm, xpm };
  }

  showElement() {
    this.display = 'kills';
    setTimeout(() => {
      this.display = 'deaths';
    }, 5000);
    setTimeout(() => {
      this.display = 'assists';
    }, 10000);
    setTimeout(() => {
      this.display = 'kak';
    }, 15000);
    setTimeout(() => {
      this.display = 'player';
    }, 20000);
    setTimeout(() => {
      this.display = 'reveal';
    }, 25000);
  }
}
