import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  row: Number;
  column: Number;
  isMouseOn: boolean

  constructor(row: Number , column: Number) {
    this.row = row;
    this.column = column;
    this.isMouseOn =false;
   }

   onClick(row:Number, column:Number){
    console.log("aaaaaaa")
    console.log(row + "b" + column)
  }

  mouseON(){

    this.isMouseOn = true;
  }

  mouseOFF(){

    this.isMouseOn = false;
  }

  mouse(){
    return this.isMouseOn;
  }

  ngOnInit() {
  }

}
