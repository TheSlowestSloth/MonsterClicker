import { Injectable } from '@angular/core';
import { Hero } from '../class/Hero';
import { MonsterService } from './monster.service';

@Injectable()
export class HeroService {
  
  public hero: Hero;

  constructor(){

    this.getSave()

  }


  getHero(){
    return this.hero;
  }

  setHero(hero: Hero){
    this.hero = hero;
  }

  getSave(){

    if (localStorage["hero"]){

      this.setHero(JSON.parse(localStorage.getItem('hero')));

    }
    else{

      this.setHero(new Hero());
      
    }

  }

}
