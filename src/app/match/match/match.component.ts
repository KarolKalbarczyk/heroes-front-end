import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameBoardComponent } from 'src/app/match/game-board/game-board.component';
import { HttpClient } from '@angular/common/http';
import { localhost } from 'src/app/app.component';
import { MatchModel as Match } from '../match-model.model';
import { tick } from '@angular/core/testing';
import { ChatComponent, Message } from '../chat/chat.component';

const HTTP_OK = 200

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit,OnDestroy {
  id: Number
  match : Match 
  matchurl = "/match/"
  messageurl = "/message/"
  interval: any
  chat: ChatComponent

  constructor(private route: ActivatedRoute,private http:HttpClient) {    }

  ngOnInit() {
    console.log("match init")
    this.route.params.subscribe((params: Params)=>(this.id = +params['id']));
    this.interval = setInterval(() =>{this.refresh();},2000)
  }

  refresh(){
    this.http.get<Match>(localhost + this.matchurl + this.id ).subscribe((match) =>(this.match = match))
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

  sendMessage(message:Message){
    console.log(message.text)
    this.http.post<Message>(localhost + this.messageurl + this.id,message,{observe : "response"}).subscribe( resp =>{
      if(resp.status !== HTTP_OK ){}
    } )
  }





}
