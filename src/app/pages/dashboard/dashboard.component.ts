import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Services
import { DataService } from '../../core/data.service';

// Components
import { ShadeDialogComponent } from '../components/shade-dialog/shade-dialog.component';
import { StatsDialogComponent } from '../components/stats-dialog/stats-dialog.component';

// Models
import { Player } from '../../core/models/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  playerList: Array<Player> = [];

  constructor(
    private data: DataService,
    private dialog: MatDialog) { }

  ngOnInit() {
    for (const player of this.data.players) {
      this.data.getPlayerProfile(player.id)
        .subscribe(response => this.playerList.push(response));
      // this.data.getWinsLosses(player.id).subscribe(x => console.log(x));
    }
  }

  openShadeDialog = (id: number): void => {
    const dialogRef = this.dialog.open(ShadeDialogComponent, {
      width: '500px',
      data: id
    });
  }

  openStatsDialog = (player: Player): void => {
    const dialogRef = this.dialog.open(StatsDialogComponent, {
      width: '500px',
      data: player
    });
  }
}
