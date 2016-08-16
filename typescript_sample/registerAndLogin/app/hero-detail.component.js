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
// import { Component,OnInit,Input,OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HeroService } from './hero.service';
// import { Hero } from './hero';
//
// @Component({
//     selector: 'my-hero-detail',
//   //   template: `
//   //   <div *ngIf="hero">
//   //     <h2>{{hero.name}} details!</h2>
//   //     <div><label>id: </label>{{hero.id}}</div>
//   //     <div>
//   //       <label>name: </label>
//   //       <input [(ngModel)]="hero.name" placeholder="name"/>
//   //     </div>
//   //   </div>
//   // `
//     template: `
//     <div *ngIf="hero">
//       <h2>{{hero.name}} details!</h2>
//       <div>
//         <label>id: </label>{{hero.id}}
//       </div>
//       <div>
//         <label>name: </label>
//         <input [(ngModel)]="hero.name" placeholder="name"/>
//       </div>
//     </div>
//   `,
//     export class HeroDetailComponent implements OnInit, OnDestroy {
//         hero: Hero;
//         sub: any;
//         /*把 RouteParams 服务和 HeroService 服务注入到构造函数中，让它们成为私有变量*/
//         constructor(
//             private heroService: HeroService,
//             private route: ActivatedRoute) {
//         }
//         //从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据
//         ngOnInit() {
//             this.sub = this.route.params.subscribe(params => {
//                 let id = +params['id'];
//                 this.heroService.getHero(id)
//                     .then(hero => this.hero = hero);
//             });
//         }
//
//         ngOnDestroy() {
//             this.sub.unsubscribe();
//         }
//
//         goBack() {
//             window.history.back();
//         }
//     },
//
// })
// /*告诉这个类，我们要实现 OnInit 和 OnDestroy 接口*/
// export class HeroDetailComponent implements OnInit, OnDestroy {
//     @Input() hero: Hero;
// }
var core_1 = require('@angular/core'); //导入 OnInit 和 OnDestroy 接口,因为我们需要在组件的 ngOnInit 生命周期钩子中调用 HeroService 并在 ngOnDestroy 中清理对 params 的订阅
var router_1 = require('@angular/router');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
//设置当前文件以及html和css文件
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    //初始  从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据(拿到id并获取到其对应的数据)
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            else {
                _this.navigated = false;
                _this.hero = new hero_1.Hero();
            }
        });
    };
    //消灭    取消了 对 params 的订阅
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        //HeroesComponent 正在监听这个通知，并自动刷新英雄列表，以体现我们最近所做的修改
        this.close.emit(savedHero); //调用了 emit 来通知别人：我们刚刚添加或修改了一个英雄
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "close", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            styleUrls: ['app/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map