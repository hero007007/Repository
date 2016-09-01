/**
 * Created by jlch on 16/8/30.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { WeChatComponent }  from './weChat.component';
// import { AppComponent }      from './app.component';

const appRoutes: Routes = [
    // {
    //     path: 'app',
    //     component: AppComponent
    // },
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'weChat',
        component: WeChatComponent
    },
    {
        path: '',
        redirectTo: '/first',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
