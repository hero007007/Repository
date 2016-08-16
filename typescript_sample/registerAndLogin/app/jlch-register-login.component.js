/**
 * Created by jlch on 16/8/9.
 */
//仪表盘 能够导航到一个选定的英雄
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
var core_1 = require('@angular/core');
var JlchRegisterLoginComponent = (function () {
    function JlchRegisterLoginComponent() {
    }
    JlchRegisterLoginComponent.prototype.linkToLogin = function () {
        var linkUrl = '';
        // window.location.href = linkUrl;//刷新本页面跳转
        // 跳转到页外
        window.open(linkUrl);
    };
    JlchRegisterLoginComponent = __decorate([
        core_1.Component({
            selector: 'my-jlch-register-login',
            templateUrl: 'app/jlch-register-login.component.html',
            styleUrls: ['app/jlch-register-login.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], JlchRegisterLoginComponent);
    return JlchRegisterLoginComponent;
}());
exports.JlchRegisterLoginComponent = JlchRegisterLoginComponent;
//# sourceMappingURL=Jlch-register-login.component.js.map