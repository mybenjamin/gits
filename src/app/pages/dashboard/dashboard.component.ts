import { Component, OnInit } from '@angular/core';
import { OpendotaApiService } from '../../core/opendota-api.service';
import { Player } from '../../core/models/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  players: any;
  playerList: Array<Player> = [];

  constructor(private opendota: OpendotaApiService) { }

  ngOnInit() {
    this.players = this.opendota.getPlayers();
    console.log(this.players);
    for (const player of this.players) {
      this.opendota.getPlayerData(player.id).subscribe(x => this.playerList.push(x));
    }
    setTimeout(() => {
      console.log(this.playerList);
    }, 1000);
  }
}
