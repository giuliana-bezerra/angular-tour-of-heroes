import { Hero } from './../hero';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  constructor(
    public dialog: MatDialogRef<HeroDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
  ) {}

  onCancel(): void {
    this.dialog.close();
  }
}
