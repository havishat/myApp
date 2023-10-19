import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { UsernameComponent } from './username/username.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DesignComponent } from './design/design.component';
import { HrComponent } from './hr/hr.component';
import {ChatDataService} from './service/chatdata.service';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    ChatpageComponent,
    UsernameComponent,
    NavmenuComponent,
    AnalyticsComponent,
    DesignComponent,
    HrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ChatDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
