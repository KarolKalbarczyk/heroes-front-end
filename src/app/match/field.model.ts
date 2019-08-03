import { Unit } from './unit.model';

export class Field {

    row: Number;
    column: Number;
    isMouseOn: boolean
    unit : Unit
  
    constructor(row: Number , column: Number, unit:Unit) {
      this.unit = unit;
      this.row = row;
      this.column = column;
      this.isMouseOn =false;
     }
  
     onClick(row:Number, column:Number){
      console.log("aaaaaaa")
      console.log(row + "b" + column)
    }
  
    get isTaken():boolean{
      if(this.unit !== undefined && this.unit !== null){
        return true;
      }
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
  
}