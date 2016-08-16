/**
 * Created by jlch on 16/8/4.
 */

//仪表盘 能够导航到一个选定的英雄

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

@Component({
    selector: 'my-dashboard',
    // template: '<h3>My Dashboard</h3>'
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [HeroSearchComponent]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    /*在下面这个方法中初始化数组
    * 调用服务来获得英雄列表*/
    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => {
                console.log(heroes) ;
                this.heroes = heroes.slice(1, 5)
            });
    }
    //仪表盘模板中，我们把每个英雄的 click 事件都绑定成 gotoDetail 方法，
    // 并且传入选中的这个 hero 实体对象
    gotoDetail(hero:Hero) {
        //路由的链接数组,
        // 并把这个数组传给路由器的navigation方法
        let link = ['/detail',hero.id];//两个元素,目标路由的路径和一个路由参数对象
        // this.router.navigator(link);//这个方法没有找到,所以用了下面的这个方法
        this.router.navigate(link);
    }
}
