/**
 * Created by jlch on 16/8/30.
 */
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';
import { FormsModule }          from '@angular/forms';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroesComponent }      from './heroes.component';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing,
    ],//应用中用到的外部模块列表,导入到的模块需要添加进来。

    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
    ],//所有属于本应用模块的,由我们亲自创建的组件,管道和指令。以便angular能认识相应的标签。

    bootstrap:    [ AppComponent ],

    providers:    [ HeroService ],
})
export class AppModule {
}
