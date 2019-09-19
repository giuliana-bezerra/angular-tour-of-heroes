import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(public dialog: MatDialog, private service: HeroService) {}

  onEdit(hero: number) {
    const dialog = this.dialog.open(HeroDetailComponent, {
      data: {
        name: this.heroes[hero].name,
        description: this.heroes[hero].description,
        franchise: this.heroes[hero].franchise,
        image: this.heroes[hero].image,
        title: 'Edit',
      },
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.heroes[hero].name = result.name;
        this.heroes[hero].description = result.description;
        this.heroes[hero].image = result.image;
        this.heroes[hero].franchise = result.franchise;
      }
    });
  }

  onDelete(hero: number) {
    this.service.deleteHero(hero).subscribe(heroes => (this.heroes = heroes));
  }

  getHeroes(): void {
    this.service.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
