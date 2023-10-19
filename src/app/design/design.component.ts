 import { Component, OnInit } from '@angular/core';
import { ChatDataService } from '../service/chatdata.service'

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  //id: boolean;
  //message: string;
  constructor() { }

  ngOnInit(): void {
    //this.chatService.getMessage(this.id, this.message).subscribe((response: any[]) => {
    //});
  }

  sendMessage() {
    //const message: Message = {
    //  user: user,
    //  text: text,
    //}
  }
}
