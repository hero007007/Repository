/**
 * Created by jlch on 16/8/8.
 */

//搜索服务   在输入框中输入字母时候下面的提醒框

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';
@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls:  ['app/hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();//Subject （主体）是一个 可观察的 事件流中的生产者。 searchTerms 生成一些字符串的 Observable ，用于作为按名搜索时的过滤条件。
    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}
    // Push a search term into the observable stream.
    search(term: string) { this.searchTerms.next(term); }
    ngOnInit() {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
