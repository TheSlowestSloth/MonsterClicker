import { Component } from '@angular/core';
import { Hero } from '../class/Hero';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../services/monster.service';
import { Monster } from '../class/Monster';
import { HeroService } from '../services/hero.service';
import { Item } from '../class/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: '../views/shop.component.html',
  styleUrls: ['../views/styles/shop.component.css']
})

export class ShopComponent {

    public hero: Hero;
    public inventory: Item[] = [];
    public items: Item[] = [];
    public flagShop: boolean = false;

    constructor(private heroService: HeroService, private itemService: ItemService ){

        this.hero = this.heroService.getHero();
        this.items = this.itemService.items;
        this.inventory = this.itemService.inventory;

    }

}