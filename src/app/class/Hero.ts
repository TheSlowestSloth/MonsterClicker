import { Item } from "./Item";

export class Hero{
    
    public damage: number = 500;
    public items: Item[];
    public score: number = 0;
    public golds: number = 0;
    public level: number = 1;
    public xp: number = 0
    public nextLvl: number = 150;
    public inventory: Item[] = [];
    
    constructor(){
    
    }

    takeItem(item: Item){

        this.items.push(item);
        this.damage += item.damage;

    }
    
}