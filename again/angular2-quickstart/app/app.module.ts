/**
 * Created by jlch on 16/8/30.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { WeChatComponent }  from './weChat.component';
import { FirstComponent } from './first.component';

@NgModule({
    imports:      [ BrowserModule,routing ],
    declarations: [ AppComponent,WeChatComponent,FirstComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
}
