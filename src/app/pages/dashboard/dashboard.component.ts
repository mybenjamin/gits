import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Services
import { DataService } from '../../core/data.service';

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

  playerList: Array<Player> = [];

  constructor(
    private data: DataService,
    private dialog: MatDialog) { }

  ngOnInit() {
    for (const player of this.data.players) {
      this.playerList.push(this.data.getPlayerProfile(player.id));
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
