import { Component, OnInit } from '@angular/core';
import { Hero } from '../class/Hero';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../services/monster.service';
import { Monster } from '../class/Monster';
import { HeroService } from '../services/hero.service';
import { ItemService } from '../services/item.service';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../views/styles/home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':leave', [
        style({ position: 'absolute', top: '200px', transform: 'scale(1)' }),
        animate('2s ease-out', style({ top: '50px', transform: 'scale(0)' }))
      ]),
    ]),
  ]
})

export class HomeComponent implements OnInit {

    ngOnInit(): void {

        setTimeout(() => {

            let percent = Math.round((100 * this.monster.hp) / this.monster.hpmax);
            let lp = document.getElementById("lifePoint");
            console.log(lp);
            lp.style.width = percent.toString() + "%";

            let percent2 = Math.round((100 * this.hero.xp) / this.hero.nextLvl);
            let xp = document.getElementById("exp");
            xp.style.width = percent2.toString() + "%";

        }, 50);

    }

    public monster: Monster;
    public hero: Hero;
    public itemCounter: number = 0;
    public dps: number;
    public damages: number[] = [];
    public clic: number = 0;
    public friend: boolean = false;

    constructor( private route: ActivatedRoute, private monsterService: MonsterService, private heroService: HeroService, private itemService: ItemService ){

        this.monster = this.monsterService.getMonster();
        this.hero = this.heroService.getHero();

    }

    scoring(event){

        let drandom: number = Math.round(Math.random() * 10);

        this.hero.score += this.monster.score;
        this.dps = Math.round((this.hero.damage) * ((100 + drandom)/100));
        this.monster.hp -= this.dps;

        this.damages.push(this.dps);
        setTimeout(() => {
            this.damages.splice(0, 1);
        }, 50);

        this.monsterService.setMonster(this.monster);

        if(this.monster.hp <= 0){

            this.hero.golds += this.monster.golds;
            this.hero.xp += this.monster.xp;

            this.monsterService.newMonster();
            this.monster = this.monsterService.getMonster();

            this.monsterService.save(this.itemService, this.heroService);

        }

        let percent: number = Math.round((100 * this.monster.hp) / this.monster.hpmax);
        let lp: HTMLElement = document.getElementById("lifePoint");
        lp.style.width = percent.toString() + "%";

        while(this.hero.xp >= this.hero.nextLvl){

            this.hero.level += 1;
            this.hero.xp -= this.hero.nextLvl;
            this.hero.nextLvl *= 1.2;

            this.itemCounter++;

            if(this.itemCounter == 5){

                this.itemService.newItem();
                this.itemCounter = 0;

            }

            this.monsterService.save(this.itemService, this.heroService);

        }

        let percent2: number = Math.round((100 * this.hero.xp) / this.hero.nextLvl);
        let xp: HTMLElement = document.getElementById("exp");
        xp.style.width = percent2.toString() + "%";

        let el: HTMLElement = event.target as HTMLElement;
        el.style.transform = "scale(0.9)";
        setTimeout(() => {
            el.style.transform = "scale(1)";
        }, 50);

        this.heroService.setHero(this.hero);

    }

}