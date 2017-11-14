import { Component } from '@angular/core';
import { Hero } from '../class/Hero';
import { Monster } from '../class/Monster';
import { Router } from '@angular/router';
import { MonsterService } from '../services/monster.service';
import { HeroService } from '../services/hero.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../views/styles/app.component.css']
})
export class AppComponent {
  
  hero: Hero = new Hero();
  monster: Monster;
  slide: boolean = false;

  constructor( private heroService: HeroService, private monsterService: MonsterService, private itemService: ItemService ){

  }
  
}
