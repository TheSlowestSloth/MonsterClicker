import { Injectable } from '@angular/core';
import { Monster } from '../class/Monster';
import { ItemService } from './item.service';
import { HeroService } from './hero.service';

@Injectable()
export class MonsterService {
  
    private monster: Monster;

    constructor(private itemService: ItemService, private heroService: HeroService){

        this.newMonster()

    }

    getMonster(){
        return this.monster;
    }

    setMonster(monster: Monster){
        this.monster = monster;
    }

    newMonster(){

        if(!this.monster){

            this.getSave();

        }
        else{

            let random = Math.round(Math.random() * 2) + 1;
            let random2 = Math.round(Math.random() * 1) + 1;
            let img = Math.round(Math.random() * 3);

            if(this.monster.image == "monster" + img + ".png"){

                img = Math.round(Math.random() * 3);

            }

            this.monster = new Monster(this.monster.id + 1, this.monster.hpmax * (this.monster.id + random), "monster" + img + ".png", this.monster.golds * (this.monster.id + random2), this.monster.xp * (this.monster.id + random), this.monster.score * (this.monster.id + random));
        
        }

    }

    save(itemService: ItemService, heroService: HeroService){

        console.log(this.monster);

        localStorage.setItem('monster', JSON.stringify(this.monster));
        localStorage.setItem('hero', JSON.stringify(heroService.getHero()));
        localStorage.setItem('item', JSON.stringify(itemService.getItem()));
        localStorage.setItem('items', JSON.stringify(itemService.getItems()));
        localStorage.setItem('inventory', JSON.stringify(itemService.getInventory()));
        
    }

    getSave(){

        if (localStorage["monster"]){

            this.setMonster(JSON.parse(localStorage.getItem('monster')));
            this.itemService.setItem(JSON.parse(localStorage.getItem('item')));
            this.itemService.setItems(JSON.parse(localStorage.getItem('items')));
            this.itemService.setInventory(JSON.parse(localStorage.getItem('inventory')));

        }
        else{

            this.setMonster(new Monster(0, 200, "monster1.png", 100, 100, 10));


        }

        console.log(this.monster);

    }

}
