import { Component, OnInit } from '@angular/core';
import { GameFieldComponent as GameField } from '../game-field/game-field.component';

export const BOARDSIZE = 5;

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  fields: GameField[]

  constructor( ) {this.fillFields() }

  ngOnInit() {
  }

  fillFields(){
    this.fields = [];
    for (let index = 0; index <BOARDSIZE ; index++) {
      for (let j = 0; j < BOARDSIZE; j++) {
      this.fields.push(new GameField(index,j))
      }
    }
  }

  onClick(row:Number, column:Number){
    console.log("aaaaaaa")
    console.log(row + "a" + column)
  }

  mouseover(){
    console.log("bbbbbb")
  }



}
