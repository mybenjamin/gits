import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { Deaths } from 'src/app/core/models/shade';

// Services
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-shade-dialog',
  templateUrl: './shade-dialog.component.html',
  styleUrls: ['./shade-dialog.component.scss']
})
export class ShadeDialogComponent implements OnInit {

  deaths: Deaths;
  matchLink: string;

  constructor(
    public dialogRef: MatDialogRef<ShadeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shade: DataService) { }

  ngOnInit() {
    this.shade.getMatchWithMostDeaths(this.data).subscribe(x => this.deaths = x.pop());
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openMatch = () => window.open(`https://www.opendota.com/matches/${this.deaths.match_id}`, '_blank');
}
