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
/**
 * Created by jlch on 16/8/4.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import 语句告诉系统，它能从附近名叫 hero.service 的文件中获得 HeroService 组件。 模块名 ( 又叫模块 ID) 通常和去掉扩展名后的文件名相同。
var hero_service_1 = require('./hero.service');
require('./rxjs-extensions');
// import { HeroesComponent } from './heroes.component';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes(ps:AppComponent)';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //   template: `
            //   <h1>{{title}}</h1>
            //   <!--告诉应该导航到哪里-->
            //   <nav>
            //       <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            //       <a [routerLink]="['/heroes']">heroes</a>
            //   </nav>
            //   <my-heroes></my-heroes>
            //   <router-outlet></router-outlet>
            // `,
            // directives: [HeroesComponent],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [hero_service_1.HeroService],
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*放用户界面的容器,组件是最基本的构造块,通过它所关联的模板,控制屏幕的一部分--视图
*
* @component装饰器告诉angular使用哪个模板以及怎样创建这个组件
* 一个组件类通过它的模板控制一个视图的外观和行为
* */ 
//# sourceMappingURL=app.component.js.map