/**
 * Created by jlch on 16/8/3.
 */

//英雄列表

// import { Component, OnInit } from '@angular/core';
//
// import { Hero } from './hero';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroService } from './hero.service';
// // export class Hero {
// //     id: number;
// //     name: string;
// // }
// //这是模拟数据
// // const HEROS: Hero[] = [
// //     { id: 11, name: 'Mr.Nice'},
// //     { id: 12, name: 'Narco' },
// //     { id: 13, name: 'Bombasto' },
// //     { id: 14, name: 'Celeritas' },
// //     { id: 15, name: 'Magneta' },
// //     { id: 16, name: 'RubberMan' },
// //     { id: 17, name: 'Dynama' },
// //     { id: 18, name: 'Dr IQ' },
// //     { id: 19, name: 'Magma' },
// //     { id: 20, name: 'Tornado' }
// // ];
// @Component({
//     selector: 'my-heroes',
//     template: `
//     <h1>{{title}}</h1>
//     <h2>My Heroes</h2>
//     <ul class="heroes">
//       <li *ngFor="let hero of heroes"
//         [class.selected]="hero === selectedHero"
//         (click)="onSelect(hero)">
//         <span class="badge">{{hero.id}}</span> {{hero.name}}
//       </li>
//     </ul>
//     <div *ngIf="selectedHero">
//       <h2>{{selectedHero.name}} details!</h2>
//       <div><label>id: </label>{{selectedHero.id}}</div>
//       <div>
//         <label>name: </label>
//         <input [(ngModel)]="selectedHero.name" placeholder="name is?"/>
//       </div>
//     </div>
//   `,
//     styles: [`
//     .selected {
//       background-color: #CFD8DC !important;
//       color: white;
//     }
//     .heroes {
//       margin: 0 0 2em 0;
//       list-style-type: none;
//       padding: 0;
//       width: 15em;
//     }
//     .heroes li {
//       cursor: pointer;
//       position: relative;
//       left: 0;
//       background-color: #EEE;
//       margin: .5em;
//       padding: .3em 0;
//       height: 1.6em;
//       border-radius: 4px;
//     }
//     .heroes li.selected:hover {
//       background-color: #BBD8DC !important;
//       color: white;
//     }
//     .heroes li:hover {
//       color: #607D8B;
//       background-color: #DDD;
//       left: .1em;
//     }
//     .heroes .text {
//       position: relative;
//       top: -3px;
//     }
//     .heroes .badge {
//       display: inline-block;
//       font-size: small;
//       color: white;
//       padding: 0.8em 0.7em 0 0.7em;
//       background-color: #607D8B;
//       line-height: 1em;
//       position: relative;
//       left: -1px;
//       top: -4px;
//       height: 1.8em;
//       margin-right: .8em;
//       border-radius: 4px 0 0 4px;
//     }
//   `],
//     directives: [HeroDetailComponent],//在 directives 中定义应用所需的指令
//     providers: [HeroService]
// })
// // export class AppComponent {
// //     title = 'Tour of Heroes';
// //     heroes = HEROS;
// //     selectedHero: Hero;
// //
// //     onSelect(hero:Hero){
// //         this.selectedHero = hero;
// //     }
// // }
// export class HeroesComponent implements OnInit {
//     title = 'Tour of Heroes';
//     heroes: Hero[];
//     selectedHero: Hero;
//     constructor(private heroService: HeroService) { }
//     getHeroes() {
//         this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//     }
//     ngOnInit() {
//         this.getHeroes();
//     }
//     onSelect(hero: Hero) { this.selectedHero = hero; }
// }

//英雄的列表视图 能够当行到一个选定的英雄

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }              from './hero';
// import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }       from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
//   template: `
  //   <h1>{{title}}</h1>
  //   <h2>My Heroes</h2>
  //   <ul class="heroes">
  //     <li *ngFor="let hero of heroes"
  //       [class.selected]="hero === selectedHero"
  //       (click)="onSelect(hero)">
  //       <span class="badge">{{hero.id}}</span> {{hero.name}}
  //     </li>
  //   </ul>
  //   <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
  //   <div *ngIf="selectedHero">
  //       <h2>
  //           <!--转换成大写-->
  //           {{selectedHero.name | uppercase}} is my hero
  //       </h2>
  //       <button (click)="gotoDetail()">View Details</button>
  //   </div>
  // `,
  //   styles: [`
  //   .selected {
  //     background-color: #CFD8DC !important;
  //     color: white;
  //   }
  //   .heroes {
  //     margin: 0 0 2em 0;
  //     list-style-type: none;
  //     padding: 0;
  //     width: 15em;
  //   }
  //   .heroes li {
  //     cursor: pointer;
  //     position: relative;
  //     left: 0;
  //     background-color: #EEE;
  //     margin: .5em;
  //     padding: .3em 0;
  //     height: 1.6em;
  //     border-radius: 4px;
  //   }
  //   .heroes li.selected:hover {
  //     background-color: #BBD8DC !important;
  //     color: white;
  //   }
  //   .heroes li:hover {
  //     color: #607D8B;
  //     background-color: #DDD;
  //     left: .1em;
  //   }
  //   .heroes .text {
  //     position: relative;
  //     top: -3px;
  //   }
  //   .heroes .badge {
  //     display: inline-block;
  //     font-size: small;
  //     color: white;
  //     padding: 0.8em 0.7em 0 0.7em;
  //     background-color: #607D8B;
  //     line-height: 1em;
  //     position: relative;
  //     left: -1px;
  //     top: -4px;
  //     height: 1.8em;
  //     margin-right: .8em;
  //     border-radius: 4px 0 0 4px;
  //   }
  // `],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) {

    }
    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error);
    }
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }
    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero)
                    { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);// 两个参数分别是路径和路由参数对象   但是路径为什么要是/detail  这动画系是啥?????
    }
}

// export class HeroesComponent implements OnInit {
//     // title = 'Tour of Heroes';
//     heroes: Hero[];
//     selectedHero: Hero;
//     constructor(private heroService: HeroService) { }
//     getHeroes() {
//         this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//     }
//     ngOnInit() {
//         this.getHeroes();
//     }
//     onSelect(hero: Hero) { this.selectedHero = hero; }
// }
