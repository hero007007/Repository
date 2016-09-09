"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jlch on 16/9/6.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var WeChatComponent = (function () {
    function WeChatComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    WeChatComponent.prototype.popToAuthorize = function () {
        // this.router.navigate(['/authorize']);
        // let linkUrl:string = 'http://m.ane56.com';
        // window.open(linkUrl);
        var redirect_uri = this.getUrl('http://wechat.zhangtl.com');
        var linkUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1bb6c550b5eb8ee7&redirect_uri=" + redirect_uri + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        window.open(linkUrl);
    };
    WeChatComponent.prototype.getAccesstoken = function () {
        var code = '001SNQ7m1SHbOx02MM6m1TxL7m1SNQ7n';
        var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx1bb6c550b5eb8ee7&secret=31521717152b630a52f87dbaa8598a3a&code=" + code + "&grant_type=authorization_code";
        this.http.get(url).map(function (res) { return res.json().data; });
        alert($, { res: res });
    };
    WeChatComponent.prototype.getUrl = function (url) {
        return encodeURIComponent(url);
    };
    WeChatComponent = __decorate([
        core_1.Component({
            selector: 'my-weChat',
            templateUrl: 'app/weChat.component.html',
            styleUrls: ['app/weChat.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], WeChatComponent);
    return WeChatComponent;
}());
exports.WeChatComponent = WeChatComponent;
//# sourceMappingURL=weChat.component.js.map