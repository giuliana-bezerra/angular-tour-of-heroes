import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: HeroService) {}

  ngOnInit() {}

  onNew() {
    const dialog = this.dialog.open(HeroDetailComponent, {
      data: {
        name: '',
        description: '',
        title: 'New',
      },
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.service.addHero(result).subscribe(result => console.log('OK!!!'));
      }
    });
  }
}
