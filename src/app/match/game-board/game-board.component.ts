import { Component, OnInit, Inject, Input, OnChanges } from '@angular/core';
import { localhost } from 'src/app/app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchIdHolderService } from 'src/app/services/match-id-holder.service';
import { Field } from '../field.model';
import { tokenName } from '@angular/compiler';
import { TokenStorageService } from 'src/app/services/token-storage.service';

export const BOARDSIZE = 10;

class Move{
  start:any
  end:any

  constructor(start,end){
    this.start = start;
    this.end = end;
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class BoardComponent implements OnInit,OnChanges {
  @Input() fields: Field[]
  matchId: Number;
  firstSelected: Field
  moveurl = "/move/"
  secondSelected:Field


  constructor(private http:HttpClient,private idholder:MatchIdHolderService,private token:TokenStorageService ) {}

  ngOnChanges(){
    for (let index = 0; index < this.fields.length; index++) {
      let row = this.fields[index].row
      let column = this.fields[index].column
      let unit = this.fields[index].unit
      this.fields[index] = Object.assign(new Field(row,column,unit),this.fields[index])
    }
  }

  ngOnInit() {
    this.matchId = this.idholder.matchId;
    
  }

  fillFields(){
    this.fields = [];
    for (let index = 0; index <BOARDSIZE ; index++) {
      for (let j = 0; j < BOARDSIZE; j++) {
        this.fields.push(new Field(index,j,null))
      }
    }
  }

  onClick(row, column){
    console.log("aa")
    let index = row*BOARDSIZE+column;
    console.log(this.firstSelected)
    if(this.firstSelected!==undefined){
      this.secondSelected = this.fields[index];
      console.log(this.secondSelected)
      console.log(this.secondSelected.isTaken)
      if(this.secondSelected.isTaken && this.secondSelected.unit.owner === this.token.getUsername.toString()){
        console.log("D")
        this.firstSelected = this.secondSelected
        this.secondSelected = undefined;
      }else{
        console.log("c")
        this.sendMoveToServer();
        this.firstSelected = undefined;
        this.secondSelected = undefined;
      }
    }else{
      if(this.fields[index].isTaken){
        this.firstSelected = this.fields[index];
     }
    }
  }

  sendMoveToServer(){
    console.log("sent");
    let {unit,...rest} = this.firstSelected;
    let firstField = rest;
    console.log(this.firstSelected)
    let {unit:unit2,...rest2} = this.secondSelected;
    let secondField = rest2
    let move = new Move(firstField,secondField);

    this.http.post<Move>(localhost + this.moveurl + this.matchId,move,httpOptions).subscribe();
  }

  mouseover(){
  }



}
