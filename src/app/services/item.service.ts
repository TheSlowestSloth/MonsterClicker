import { Injectable } from '@angular/core';
import { Item } from '../class/Item';
import { Hero } from '../class/Hero';
import { HeroService } from './hero.service';


@Injectable()
export class ItemService {

    public items: Item[] = [];  
    private item: Item = this.newItem();
    public hero: Hero;
    public inventory: Item[] = [];
    public validation: boolean = false;

    constructor(private heroService: HeroService){

        this.hero = this.heroService.getHero();

    }    

    getItem(){
        return this.item;
    }

    setItem(item: Item){
        this.item = item;
    }

    getItems(){
        return this.items;
    }

    setItems(items: Item[]){
        this.items = items;
    }

    getInventory(){
        return this.inventory;
    }

    setInventory(inventory: Item[]){
        this.inventory = inventory;
    }

    newItem(){

        let random = Math.round(Math.random() * 2) + 2;
        let random2 = Math.round(Math.random() * 1) + 2;

        if(!this.item){
            
            let item = new Item(50 * random, random, 300, "item1.png");
            this.items.push(item);
            return item;
            
        }
        else{

            this.item = new Item(this.item.damage * random2, this.item.level  + random, this.item.price * random2, "item" + random + ".png");
            this.items.push(this.item);

        }

    }

    displayItem(){
        
        if(this.hero.level >= this.item.level){

            this.item.available = true;

        }
    }

    buyIt(index){

        console.log(this.hero);

        let item = this.items[index];

        if(this.hero.golds > item.price){

            this.hero.damage += item.damage;
            this.hero.golds -= item.price;
            this.inventory.push(item);
            item.sold = true;
            this.items.splice(index, 1);
            
        }

    }

    nFormatter(num) {
        var si = [
          { value: 1E18, symbol: "E" },
          { value: 1E15, symbol: "P" },
          { value: 1E12, symbol: "T" },
          { value: 1E9,  symbol: "G" },
          { value: 1E6,  symbol: "M" },
          { value: 1E3,  symbol: "k" }
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
            }
        }
        return num.toFixed(1).replace(rx, "$1");
    }

}
