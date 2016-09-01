"use strict";
var router_1 = require('@angular/router');
var first_component_1 = require('./first.component');
var weChat_component_1 = require('./weChat.component');
// import { AppComponent }      from './app.component';
var appRoutes = [
    // {
    //     path: 'app',
    //     component: AppComponent
    // },
    {
        path: 'first',
        component: first_component_1.FirstComponent
    },
    {
        path: 'weChat',
        component: weChat_component_1.WeChatComponent
    },
    {
        path: '',
        redirectTo: '/first',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map