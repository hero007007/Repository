/**
 * Created by jlch on 16/8/30.
 */
import { Component,OnInit } from '@angular/core';
import { Hero }             from './hero';
import { HeroService }      from './hero.service';
import { Router }           from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css'],
    // providers: [HeroService]//被提到了app.module中
})
export class HeroesComponent implements OnInit{

    constructor(
        private heroService: HeroService,
        private router:Router
    ) { }


    // title = 'Tour of Heroes';
    // hero = 'Windstorm';
    selectedHero: Hero;
    // heroes = HEROES;
    heroes: Hero[];


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //    模拟网速慢的情况下
    //     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
