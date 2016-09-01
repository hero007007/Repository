/**
 * Created by jlch on 16/8/30.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'app-first',
    templateUrl:'app/first.component.html',
    styleUrls:['app/first.component.css'],
})

export class FirstComponent{
    constructor(private router:Router){

    }
    popToWeChat(){
        this.router.navigate(['/weChat']);
    }
}