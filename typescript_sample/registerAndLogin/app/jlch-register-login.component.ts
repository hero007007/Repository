/**
 * Created by jlch on 16/8/9.
 */
//仪表盘 能够导航到一个选定的英雄

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'my-jlch-register-login',
    templateUrl: 'app/jlch-register-login.component.html',
    styleUrls: ['app/jlch-register-login.component.css'],
})

export class JlchRegisterLoginComponent{
    linkToLogin(){
        var linkUrl:string = '';
        // window.location.href = linkUrl;//刷新本页面跳转
        // 跳转到页外
        window.open(linkUrl);
    }
}
