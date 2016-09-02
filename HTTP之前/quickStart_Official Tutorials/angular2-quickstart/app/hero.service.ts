/**
 * Created by jlch on 16/9/1.
 */
import { Injectable }   from '@angular/core';
import { HEROES }       from './mock-heroes';
import { Hero }         from './hero';

@Injectable()
export class HeroService {
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }

    getHeroes(): Promise<any> {
        return Promise.resolve(HEROES)
            //.then(return HEROES);
    }

    //模拟网速慢的情况下 (会延迟两秒呈现)
    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    //     );
    // }

    //数组的find方法,拿到元素..
    getHero(id:number): Promise<Hero[]>{
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }

}
