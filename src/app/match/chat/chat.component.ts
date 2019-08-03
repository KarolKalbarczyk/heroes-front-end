import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { VirtualTimeScheduler } from 'rxjs';

export class Message{
  time:String
  author:String
  text: Number

  constructor(time,author,text){
    this.time = time
    this.author = author
    this.text = text
    console.log(this.fullMessage)
  }

  get fullMessage(){
    console.log("AASDASDSA")
    return `${this.author}: ${this.text} at ${this.time}`
  }

  
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges{
  @Input() messages: Message[]
  newMessage: String
  @Output() sendMessage: EventEmitter<Message> = new EventEmitter<Message>()
  @ViewChild('panel', { read:ElementRef,static:true }) public panel: ElementRef<any>;
  isDown:boolean
  MESSAGE_HEIGHT = 25;



  constructor(private http:HttpClient, private token:TokenStorageService) {
   }

  ngOnInit() {
  }
  ngOnChanges(){
    if(this.isDown){
      this.scrollDown()
    }
  }

  writeMessage(){
    this.sendMessage.emit(new Message(0,this.token.getUsername(),this.newMessage))
  }

  scrollDown(){
    this.panel.nativeElement.scrollTop = this.panel.nativeElement.scrollHeight; 
  }

  isScrollDown(){
    this.isDown = this.panel.nativeElement.scrollTop +this.panel.nativeElement.offsetHeight + this.MESSAGE_HEIGHT >= this.panel.nativeElement.scrollHeight
  }

  colorOfUser(author){
    if (this.token.getUsername()===author){
      return {
        "color": "blue",
      }
    }else{
      return {
        "color": "red",
      }
    }
  }




}
