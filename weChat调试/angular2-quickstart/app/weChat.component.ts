/**
 * Created by jlch on 16/9/6.
 */
import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { Http,Response }             from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import any = jasmine.any;

@Component({
    selector: 'my-weChat',
    templateUrl: 'app/weChat.component.html',
    styleUrls: ['app/weChat.component.css']
})

export class WeChatComponent{

    constructor(private router:Router,
                public http:Http,
    ) {}


    popToAuthorize(){
        // this.router.navigate(['/authorize']);
        // let linkUrl:string = 'http://m.ane56.com';
        // window.open(linkUrl);
        let redirect_uri:string = this.getUrl('http://wechat.zhangtl.com');
        let linkUrl:string = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1bb6c550b5eb8ee7&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        window.open(linkUrl);
    }
    //从本页网址中获取到code参数的值
    getQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  decodeURI(r[2]);
        return null;
    }

    getAccesstoken(){
        // let code:string = '001SNQ7m1SHbOx02MM6m1TxL7m1SNQ7n';
        let code:string = this.getQueryString('code');
        let url:string = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx1bb6c550b5eb8ee7&secret=31521717152b630a52f87dbaa8598a3a&code=${code}&grant_type=authorization_code`;
        let res:Response;
        this.http.get(url).map(res => res.json().data as string);
        // alert(res);
    }



    getUrl(url:string){
        return encodeURIComponent(url);
    }

}