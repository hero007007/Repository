/**
 * Created by jlch on 16/8/4.
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
//仪表盘 能够导航到一个选定的英雄
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var hero_search_component_1 = require('./hero-search.component');
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    /*在下面这个方法中初始化数组
    * 调用服务来获得英雄列表*/
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) {
            console.log(heroes);
            _this.heroes = heroes.slice(1, 5);
        });
    };
    //仪表盘模板中，我们把每个英雄的 click 事件都绑定成 gotoDetail 方法，
    // 并且传入选中的这个 hero 实体对象
    DashboardComponent.prototype.gotoDetail = function (hero) {
        //路由的链接数组,
        // 并把这个数组传给路由器的navigation方法
        var link = ['/detail', hero.id]; //两个元素,目标路由的路径和一个路由参数对象
        // this.router.navigator(link);//这个方法没有找到,所以用了下面的这个方法
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            // template: '<h3>My Dashboard</h3>'
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css'],
            directives: [hero_search_component_1.HeroSearchComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map