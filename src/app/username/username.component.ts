import { Component, OnInit } from '@angular/core';
import { ChatDataService } from '../service/chatdata.service'
import { ChatMessageRequest } from '../model/chatMessage.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  chatMessage = new ChatMessageRequest();

  constructor(private chatDataService: ChatDataService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
        this.chatDataService.name = this.chatMessage.name
        this._router.navigateByUrl('/chatpage');
    }
}
