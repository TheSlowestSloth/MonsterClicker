import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './components/home.component';
import { HeroService } from './services/hero.service';
import { MonsterService } from './services/monster.service';
import { ShopComponent } from './components/shop.component';
import { ItemService } from './services/item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService, MonsterService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
