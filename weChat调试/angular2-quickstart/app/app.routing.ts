/**
 * Created by jlch on 16/8/30.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { WeChatComponent }      from './weChat.component';
import { AuthorizeComponent }   from './authorize.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/weChat',
        pathMatch: 'full'
    },
    {
        path:'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'weChat',
        component: WeChatComponent
    },
    {
        path: 'authorize',
        component: AuthorizeComponent
    }

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);