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
 * Created by jlch on 16/9/7.
 */
var core_1 = require('@angular/core');
var AuthorizeComponent = (function () {
    function AuthorizeComponent() {
    }
    AuthorizeComponent.prototype.ngOnInit = function () {
        var redirect_uri = this.getUrl('http://wechat.zhangtl.com/authorize');
        var linkUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1bb6c550b5eb8ee7&redirect_uri=" + redirect_uri + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        window.open(linkUrl);
    };
    AuthorizeComponent.prototype.getUrl = function (url) {
        return encodeURIComponent(url);
    };
    AuthorizeComponent = __decorate([
        core_1.Component({
            selector: 'my-authorize',
            templateUrl: 'app/authorize.component.html',
            styleUrls: ['app/authorize.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AuthorizeComponent);
    return AuthorizeComponent;
}());
exports.AuthorizeComponent = AuthorizeComponent;
//# sourceMappingURL=authorize.component.js.map