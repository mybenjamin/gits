import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// Services
import { OpendotaApiService } from '../../core/opendota-api.service';
// Components
import { ShadeDialogComponent } from '../components/shade-dialog/shade-dialog.component';
// Models
import { Player } from '../../core/models/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  players: any;
  playerList: Array<Player> = [];

  constructor(
    private opendota: OpendotaApiService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.players = this.opendota.getPlayers();
    for (const player of this.players) {
      this.opendota.getPlayerData(player.id).subscribe(x => this.playerList.push(x));
    }
  }

  openShadeDialog = (id: number): void => {
    const dialogRef = this.dialog.open(ShadeDialogComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
