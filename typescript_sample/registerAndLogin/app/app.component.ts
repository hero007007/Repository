/**
 * Created by jlch on 16/8/4.
 */
import { Component }       from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import 语句告诉系统，它能从附近名叫 hero.service 的文件中获得 HeroService 组件。 模块名 ( 又叫模块 ID) 通常和去掉扩展名后的文件名相同。
import { HeroService }     from './hero.service';
import './rxjs-extensions';

// import { HeroesComponent } from './heroes.component';


@Component({
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
    directives:[ROUTER_DIRECTIVES],//添加 HeroesComponent 组件到 directives 数组中，以便 Angular 能认识 <my-heroes> 标签
    providers: [HeroService],//添加 HeroService 到 providers 数组中，因为我们的每一个视图都需要它
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],

})

//AppComponent 中添加一个到 HeroDetailComponent 的路由，也就是配置其它路由的地方
// export 语句告诉 TypeScript ：这是一个模块，其中 AppComponent 类是公开的，可以被应用程序中的其它模块访问。
export class AppComponent {
    title = 'Tour of Heroes(ps:AppComponent)';
}

/*放用户界面的容器,组件是最基本的构造块,通过它所关联的模板,控制屏幕的一部分--视图
*
* @component装饰器告诉angular使用哪个模板以及怎样创建这个组件
* 一个组件类通过它的模板控制一个视图的外观和行为
* */