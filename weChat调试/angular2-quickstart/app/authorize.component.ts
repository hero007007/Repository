/**
 * Created by jlch on 16/9/7.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'my-authorize',
    templateUrl:'app/authorize.component.html',
    styleUrls:['app/authorize.component.css'],
})

export class AuthorizeComponent implements OnInit{

    ngOnInit():void{

        let redirect_uri:string = this.getUrl('http://wechat.zhangtl.com/authorize');
        let linkUrl:string = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1bb6c550b5eb8ee7&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        window.open(linkUrl);

    }
    getUrl(url:string){
        return encodeURIComponent(url);
    }

}