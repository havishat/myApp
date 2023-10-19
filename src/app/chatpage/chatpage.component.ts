import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ChatDataService } from '../service/chatdata.service'

@Component({
  selector: 'app-chatpage',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css'],
  providers: [AnalyticsComponent]
})
export class ChatpageComponent implements OnInit {
  private analyticsComponent: AnalyticsComponent;

  // tabs = [
  //   { id: 0, name: 'tabAnalytics', title: 'Analytics', active: true, component: '<app-analytics></app-analytics>' },
  //   { id: 1, name: 'tabBusiness', title: 'Business', active: false, component: '<app-business></app-business>' },
  //   // { id: 2, name: 'tabDesign', title: 'Design', active: false, component: '<app-design></app-design>' },
  //   // { id: 3, name: 'tabEngineering', title: 'Engineering', active: false, component: '<app-engineering></app-engineering>' },
  //   // { id: 4, name: 'tabHR', title: 'HR', active: false, component: '<app-hr></app-hr>' },
  //   // { id: 5, name: 'tabOperations', title: 'Operations', active: false, component: '<app-operations></app-operations>' },
  //   // { id: 6, name: 'tabSpecialOps', title: 'SpecialOps', active: false, component: '<app-special-ops></app-special-ops>' },
  // ];

  tabs: any
  name = '';
  localTime = ''
  time: any;
  
  activeTabId: number | undefined;
  room: any
  constructor(_analyticsComponent: AnalyticsComponent, private chatDataService: ChatDataService) {
    this.analyticsComponent = _analyticsComponent;
  }

  ngOnInit() {
   this.activeTabId = 0;
   this.name = this.chatDataService.name;
   console.log(this.chatDataService.time)
   
  //  console.log("timeslf", this.chatDataService.time2)
  //  console.log("teim", new Date().getMinutes())
  //  this.time = this.chatDataService.time - this.chatDataService.time2
  // console.log("time", this.time)
  //  this.localTime = Math.abs(Math.round(this.time / 60000)).toString(); // minutes
  //  console.log("local", this.localTime)

  // this.chatDataService.getRoom().subscribe((response)=>{

      this.room = {id: 1, name: this.name};
      console.log(this.room)
      this.tabs = [
        { id: this.room[0].id, name: 'tab' + this.room[0].name, title: this.room[0].name, active: true, component: '<app-analytics></app-analytics>' },
      //  { id: this.room[1].id, name: 'tab' + this.room[1].name, title: this.room[1].name, active: false, component: '<app-business></app-business>' },
     ];
 // })
  }

  changeTab(id: number) {
    this.activeTabId = id;
  }

}
