/**
 * Created by jlch on 16/8/3.
 */

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



import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';//导入 OnInit 和 OnDestroy 接口,因为我们需要在组件的 ngOnInit 生命周期钩子中调用 HeroService 并在 ngOnDestroy 中清理对 params 的订阅
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

//设置当前文件以及html和css文件
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

// 告诉 HeroDetailComponent 该显示哪个英雄
export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;
    navigated = false; // true if navigated here


    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }
    //初始  从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据(拿到id并获取到其对应的数据)
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    //消灭    取消了 对 params 的订阅
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedHero: Hero = null) {
        //HeroesComponent 正在监听这个通知，并自动刷新英雄列表，以体现我们最近所做的修改
        this.close.emit(savedHero);//调用了 emit 来通知别人：我们刚刚添加或修改了一个英雄
        if (this.navigated) { window.history.back(); }
    }

}
