/**
 * Created by jlch on 16/8/3.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { HeroDetailComponent } from './hero-detail.component';
var hero_service_1 = require('./hero.service');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.addingHero = false;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; })
            .catch(function (error) { return _this.error = error; });
    };
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]); // 两个参数分别是路径和路由参数对象   但是路径为什么要是/detail  这动画系是啥?????
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
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
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
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
//# sourceMappingURL=heroes.component.js.map