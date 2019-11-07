import { Component, OnInit } from '@angular/core';
import { OpendotaApiService } from '../../core/opendota-api.service';
import { Player } from '../../core/models/player';
import { ThrowShadeService } from 'src/app/core/throw-shade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  players: any;
  playerList: Array<Player> = [];
  constructor(private opendota: OpendotaApiService, private shade: ThrowShadeService) { }

  ngOnInit() {
    this.players = this.opendota.getPlayers();
    for (const player of this.players) {
      this.opendota.getPlayerData(player.id).subscribe(x => this.playerList.push(x));
    }
  }

  throwShade = (id: number) => this.shade.mostDeaths(id).subscribe(x => x);

}
