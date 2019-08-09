import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BoardComponent } from 'src/app/match/game-board/game-board.component';
import { HttpClient } from '@angular/common/http';
import { localhost } from 'src/app/app.component';
import { MatchModel as Match } from '../match-model.model';
import { tick } from '@angular/core/testing';
import { ChatComponent, Message } from '../chat/chat.component';
import { MatchIdHolderService } from 'src/app/services/match-id-holder.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

const HTTP_OK = 200;
const HTTP_ALREADY_REPORTED = 208;

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit, OnDestroy {
  id: number;
  match: any;
  matchurl = '/match/';
  messageurl = '/message/';
  endurl = '/end/';
  interval: any;
  @ViewChild(ChatComponent, {static: false})  chat: ChatComponent;
  @ViewChild(BoardComponent, {static: false})  board: BoardComponent;
  turnOwner: string;
  result: string;



  constructor(private route: ActivatedRoute, private http: HttpClient,
              private idholder: MatchIdHolderService, private token: TokenStorageService) {    }

  ngOnInit() {
    console.log('match init');
    console.log(this.idholder.matchId);
    this.route.params.subscribe((params: Params)=>(this.id = +params.id));
    this.idholder.matchId = this.id
    this.interval = setInterval(() => {this.refresh(); }, 1000);
  }

  refresh() {
    if (this.chat) {
      this.chat.isScrollDown();
    }
    this.http.get<Match>(localhost + this.matchurl + this.id).subscribe((match) => {
      this.match = match;
      console.log(match);
      this.setTurnOwner();
      if (this.match.winner) {
        this.endMatch();
      }
    });
    }
   endMatch() {
     clearInterval(this.interval);
    this.interval = setInterval(() => {this.http.post(localhost + this.endurl + this.id, this.token.getUsername(), {observe: 'response'})
      .subscribe( (resp) => {
        if (resp.status === HTTP_OK) {
          clearInterval(this.interval);
          this.displayWinner();
        }
      });
                                       console.log('aaa'); },1000 );
   }
   displayWinner() {
    console.log("display")
    if (this.match.winner.username === this.token.getUsername()) {
      this.result = 'ez win';
    } else {
      this.result = 'fkn noob';
    }
   }


  ngOnDestroy() {
    clearInterval(this.interval);
  }

  setTurnOwner() {
    if (this.match.presentUser === this.token.getUsername().toString()) {
      this.turnOwner = 'your turn';
    } else {
      this.turnOwner = 'enemy\'s turn';
    }
  }

  sendMessage(message: Message) {
    console.log(message.text);
    this.http.post<Message>(localhost + this.messageurl + this.id, message, {observe : 'response'}).subscribe( resp => {
      if (resp.status !== HTTP_OK ) {}
    } );
  }





}
