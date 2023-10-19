import { Component, OnInit } from '@angular/core';
import { ChatDataService } from '../service/chatdata.service'
import { ChatMessageRequest} from '../model/chatMessage.model'
import { response } from 'express';
import { FormsModule, NgForm } from '@angular/forms';
// import { UsernameComponent} from '../username/username.component'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  chatMessage = new ChatMessageRequest();
  name = '';
  messageChat : any;
  id: 0 | undefined;
  roomsUsers: any;
  message: any;
  chatMap: any;

  constructor(private chatDataService: ChatDataService) {
    this.message = [];
    this.roomsUsers = [];
   }

  ngOnInit(): void {
    // this.chatDataService.getRoomsUsers(this.id).subscribe((response)=>{
    //   this.roomsUsers = response;
    //     console.log("room", this.roomsUsers)
    // })
    this.name = this.chatDataService.name;
    // this.chatDataService.getChatMessage(this.id).subscribe((response) => {
    //   this.messageChat = response
    // })
    this.messageChat = this.chatDataService.getChatMessage(this.id)
    this.getData()
  }
  

  getData(){
    this.messageChat = this.chatDataService.getChatMessage(this.chatMessage.id)
    console.log("chat", this.messageChat)
  }

  sendMessage() {
    
    // this.chatDataService.postMessage(this.chatMessage).subscribe((response) => {
    //   this.chatMessage.name = this.chatDataService.name;
    //   this.chatMessage.id = Math.random().toString(36).substring(7);
    // })

    this.chatMessage.name = this.chatDataService.name;
    this.chatMessage.id = Math.random().toString(36).substring(7);
    this.chatMap = this.chatDataService.postMessage(this.chatMessage)
    console.log(this.chatMap)
    this.message.push(this.chatMessage);
    this.roomsUsers.push(this.chatMessage.name);
    console.log("mess", this.message)
  }

}
