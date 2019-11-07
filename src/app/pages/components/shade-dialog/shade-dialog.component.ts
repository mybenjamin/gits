import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shade-dialog',
  templateUrl: './shade-dialog.component.html',
  styleUrls: ['./shade-dialog.component.scss']
})
export class ShadeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShadeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
