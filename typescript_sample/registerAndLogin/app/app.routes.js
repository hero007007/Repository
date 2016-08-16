/**
 * Created by jlch on 16/8/4.
 */
"use strict";
// Angular 路由器是由多个服务 (ROUTER_PROVIDERS) 和多个指令 (ROUTER_DIRECTIVES) 以及一个配置装饰器 (RouteConfig) 组成的
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var Jlch_register_login_component_1 = require('./Jlch-register-login.component');
var Jlch_member_component_1 = require('./Jlch-member.component');
//Angular路由器的组成,(directive;provider;routerConfig)
var routes = [
    {
        //英雄板
        path: 'heroes',
        component: heroes_component_1.HeroesComponent //组件
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: './heroes',
        pathMatch: 'full'
    },
    {
        //英雄详情界面
        //配置带参数的路由
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'register-login',
        component: Jlch_register_login_component_1.JlchRegisterLoginComponent,
    },
    {
        path: 'member',
        component: Jlch_member_component_1.JlchMemberComponent,
    },
];
// 定义第一个路由——到 HeroesComponent 的路由
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map