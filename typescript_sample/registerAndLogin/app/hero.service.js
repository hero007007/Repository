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
//这个文件是要共享的,HTTP请求是放在这里
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';//node_modules库文件
//
// import {Hero} from './hero';
// import {Headers,Http} from "@angular/http";
// // import { HEROES } from './mock-heroes';//文件已经失效
// @Injectable()
// export class HeroService {
//     private heroesUrl = 'app/heroes';  // URL to web api
//     constructor(private http: Http){
//
//     }
//
//     getHeroes() {
//         // return Promise.resolve(HEROES);
//         return this.http.get(this.heroesUrl)
//             .toPromise()// 有报错时候需要导入  import 'rxjs/add/operator/toPromise';
//             .then(response => response.json().data as Hero[])
//             .catch(this.handleError);
//     }
//     getHero(id: number) {
//         return this.getHeroes()
//             .then(heroes => heroes.find(hero => hero.id === id));
//     }
//     save(hero: Hero): Promise<Hero>  {
//         if (hero.id) {
//             return this.put(hero);
//         }
//         return this.post(hero);
//     }
//
//     // Add new Hero 添加操作
//     private post(hero: Hero): Promise<Hero> {
//         let headers = new Headers({
//             'Content-Type': 'application/json'});
//
//         return this.http
//             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
//             .toPromise()
//             .then(res => res.json().data)
//             .catch(this.handleError);
//     }
//     // Update existing Hero  编辑操作
//     private put(hero: Hero) {
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//
//         let url = `${this.heroesUrl}/${hero.id}`;
//
//         return this.http
//                    .put(url, JSON.stringify(hero), {headers: headers})
//                    .toPromise()
//                    .then(() => hero)
//                    .catch(this.handleError);
//     }
//     //删除操作
//     delete(hero: Hero) {
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//
//         let url = `${this.heroesUrl}/${hero.id}`;
//
//         return this.http
//             .delete(url, {headers: headers})
//             .toPromise()
//             .catch(this.handleError);
//     }
//
//     private handleError(error: any) {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }
//
// }
//
//
//这个文件是要共享的,HTTP请求是放在这里    添加,删除,更新
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        // heroes => heroes.find(hero => hero.id === id)
        // console.log('============');
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.save = function (hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    };
    HeroService.prototype.delete = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Hero
    HeroService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Hero
    HeroService.prototype.put = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map