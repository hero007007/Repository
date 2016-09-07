/**
 * Created by jlch on 16/9/1.
 */
import { Component,OnInit,Input }   from '@angular/core';
import { Hero }                     from './hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { HeroService }              from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl:'app/hero-detail.component.html',
    styleUrls:['app/hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero[];
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }


}
