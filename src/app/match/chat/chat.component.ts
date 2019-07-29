import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { VirtualTimeScheduler } from 'rxjs';

export class Message{
  time:String
  author:String
  text: String

  constructor(time,author,text){
    this.time = time
    this.author = author
    this.text = text
  }

  get getTime(){
    return this.time;
  }

  get getAuthor(){
    return this.author
  }

  get getText(){
    return this.text
  }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() messages: Message[]
  newMessage: String
  @Output() sendMessage: EventEmitter<Message> = new EventEmitter<Message>()


  constructor(private http:HttpClient, private token:TokenStorageService) {
   }

  ngOnInit() {
  }

  writeMessage(){
    console.log(this.token.getUsername())
    this.sendMessage.emit(new Message(0,this.token.getUsername(),this.newMessage))
  }

}
