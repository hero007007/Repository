/**
 * Created by jlch on 16/8/3.
 */

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

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api
    constructor(private http: Http) { }
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response =>response.json().data as Hero[])
            .catch(this.handleError);
    }
    getHero(id: number) {
        // heroes => heroes.find(hero => hero.id === id)
        // console.log('============');
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    save(hero: Hero): Promise<Hero>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }
    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }
    // Add new Hero
    private post(hero: Hero): Promise<Hero> {

        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    // Update existing Hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
