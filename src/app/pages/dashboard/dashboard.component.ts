import { Component, OnInit } from '@angular/core';
import { OpendotaApiService } from '../../core/opendota-api.service';
import { Player } from '../../core/models/player';
import { ThrowShadeService } from '../../core/throw-shade.service';
import { MatDialog } from '@angular/material/dialog';
import { ShadeDialogComponent } from '../components/shade-dialog/shade-dialog.component';

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
    private shade: ThrowShadeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.players = this.opendota.getPlayers();
    for (const player of this.players) {
      this.opendota.getPlayerData(player.id).subscribe(x => this.playerList.push(x));
    }
  }

  throwShade = (id: number) => this.shade.mostDeaths(id).subscribe(x => this.openDialog(x));

  openDialog(shade): void {
    const params = shade.pop();
    const dialogRef = this.dialog.open(ShadeDialogComponent, {
      width: '350px',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
