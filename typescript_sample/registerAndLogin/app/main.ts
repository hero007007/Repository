/**
 * Created by jlch on 16/8/3.
 */
// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';
//
// import { AppComponent } from './app.component';
// import {appRouterProviders} from './app.routes';//导入组件路由器,并且把他添加到bootstrap的数组参数中让它在此应用中可用
//
// bootstrap(AppComponent,[
//     appRouterProviders,
//     HTTP_PROVIDERS
// ]);

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);

/*
* 定出程序的主界面
*
* bootstrap( 引导 ) 函数
* */