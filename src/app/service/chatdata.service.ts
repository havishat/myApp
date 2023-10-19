import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
//import { LandingPageRe} from '../model/landingpage.model';
//import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
import { UserRequest } from '../model/user.model';
import { ChatMessageRequest } from '../model/chatMessage.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatDataService {

  // loginobject = {
  //   id: 0,
  //   message: '',
  // }

  name = '';
  time = new Date().getMinutes();
  rootURL = '/api';
  session: any;

  constructor(private httpClient: HttpClient) {
  }
  
  // public getRoom() {
  //   const baseUrlWithVersion = 'http://localhost:8080/api/rooms';
  //   return this.httpClient.get(baseUrlWithVersion);
  // }

  // public getRoomsUsers(id: any) {
  //   // const baseUrlWithVersion = 'http://localhost:8080/api/rooms/';
  //   // return this.httpClient.get(baseUrlWithVersion + `${id}`);
    
  //   return  localStorage.getItem(this.session.id);
  // }

  public postMessage(messageRequest: ChatMessageRequest) {
   // const baseUrlWithVersion = 'http://localhost:8080/api/rooms/' + `${this.loginobject.id}`;
   // const baseUrlWithVersion = 'http://localhost:8080/api/rooms/' + `${id}` + '/messages';
   
 //   return this.httpClient.post(baseUrlWithVersion, messageRequest);
    console.log("i", messageRequest.id)
    console.log("m", messageRequest.message)

    this.session.push( {
      "id": messageRequest.id,
      "message": messageRequest.message,
      "name": messageRequest.name
    })

    // this.session.message = messageRequest.message
    // this.session.name = messageRequest.name
   return localStorage.setItem(messageRequest.id, messageRequest.message);
  }

  // public postUsers(messageRequest: ChatMessageRequest){
  //   return localStorage.setItem(messageRequest.id, messageRequest.name)
  // }

  public getChatMessage(id: any) {
    // const baseUrlWithVersion = 'http://localhost:8080/api/rooms/' + `${this.loginobject.id}`;
   //  const baseUrlWithVersion = 'http://localhost:8080/api/rooms/' + `${id}` + '/messages';
    // return this.httpClient.get(baseUrlWithVersion);
    for(let i=0; i<this.session.length;i++){
      if(this.session[i].id == id){
        return this.session[i]
      } else {
        return  localStorage.getItem(id);
      }
    }
   }
}
