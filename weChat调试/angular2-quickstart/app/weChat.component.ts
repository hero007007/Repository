/**
 * Created by jlch on 16/9/6.
 */
import { Component } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'my-weChat',
    templateUrl: 'app/weChat.component.html',
    styleUrls: ['app/weChat.component.css']
})

export class WeChatComponent{

    constructor(private router:Router) {}


    popToAuthorize(){
        this.router.navigate(['/authorize']);
        // let linkUrl:string = 'http://m.ane56.com';
        // window.open(linkUrl);
        // let redirect_uri:string = this.getUrl('http://wechat.zhangtl.com');
        // let linkUrl:string = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1bb6c550b5eb8ee7&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`;
        // window.open(linkUrl);
    }
    // getUrl(url:string){
    //     return encodeURIComponent(url);
    // }

}