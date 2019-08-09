import {
  Component,
  OnInit,
  Inject,
  Input,
  OnChanges,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef, HostBinding, ElementRef
} from '@angular/core';
import { localhost } from 'src/app/app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchIdHolderService } from 'src/app/services/match-id-holder.service';
import { Field } from '../field.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {UnitInfoComponent} from '../unit-info/unit-info.component';
import {Unit} from '../unit.model';

export const BOARDSIZE = 10;

class Move {
  start: any;
  end: any;

  constructor(start, end) {
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
export class BoardComponent implements OnInit, OnChanges {
  @Input() fields: Field[];
  matchId: number;
  firstSelected: Field;
  moveurl = '/move/';
  secondSelected: Field;
  @ViewChild('unitInfoPopup', {read: ViewContainerRef, static: true}) unitInfoPopup:
    ViewContainerRef;
  unitInfoRef: ComponentRef<UnitInfoComponent>;
  unitInfoPosition = {position: 'fixed',
  left: '500px',
  color: 'blue'};
  archerpng: any;

  position() {
    return this.unitInfoPosition;
  }


  constructor(private http: HttpClient, private idholder: MatchIdHolderService,
              private token: TokenStorageService, private componentFactoryResolver: ComponentFactoryResolver ) {}


   ngOnChanges() {
    const fields = [];
    let unit;
    let oldfield;
    for (let i = 0; i < BOARDSIZE ; i++) {
      for (let j = 0; j < BOARDSIZE ; j++) {
        const receivedUnit = this.fields[i][j].unit;
        if (receivedUnit) {
          unit = new Unit(receivedUnit);
        } else {
          unit = null;
        }
        oldfield = this.fields[i][j];
        fields.push(new Field(oldfield.row, oldfield.column, unit));
      }
    }
    this.fields = fields;
  }

  setUnitInfoPosition(element) {
    const left = element.getBoundingClientRect().left;
    const top = element.getBoundingClientRect().top + 50;
    return {
      color: 'red',
      position: 'fixed',
      left: left + 'px',
      top: top + 'px',
    };
  }

  ngOnInit() {
    if(this.idholder.matchId) {
      this.matchId = this.idholder.matchId;
    }
  }

  destroyUnitInfo() {
    if (this.unitInfoRef) {
      this.unitInfoRef.destroy();
      delete this.unitInfoRef;
    }
  }

  displayInfo(row, column, event, index) {
    if (!this.unitInfoRef) {
      const infoComponent = this.componentFactoryResolver.resolveComponentFactory(UnitInfoComponent);
      this.unitInfoRef = this.unitInfoPopup.createComponent(infoComponent);
    }
    const unit = this.fields[index].unit;
    this.unitInfoRef.instance.unit = unit;
    this.unitInfoRef.instance.position = this.setUnitInfoPosition(event);
    this.unitInfoRef.changeDetectorRef.detectChanges();
  }

    fillFields() {
    this.fields = [];
    for (let index = 0; index < BOARDSIZE ; index++) {
      for (let j = 0; j < BOARDSIZE; j++) {
        this.fields.push(new Field(index, j, null));
      }
    }
  }

  onClick(row, column) {
    console.log('aa');
    const index = row * BOARDSIZE + column;
    console.log(this.firstSelected);
    if (this.firstSelected !== undefined) {
      this.secondSelected = this.fields[index];
      console.log(this.secondSelected);
      console.log(this.secondSelected.isTaken);
      if (this.secondSelected.isTaken && this.secondSelected.unit.owner === this.token.getUsername.toString()) {
        console.log('D');
        this.firstSelected = this.secondSelected;
        this.secondSelected = undefined;
      } else {
        console.log('c');
        this.sendMoveToServer();
        this.firstSelected = undefined;
        this.secondSelected = undefined;
      }
    } else {
      if (this.fields[index].isTaken) {
        this.firstSelected = this.fields[index];
     }
    }
  }

  sendMoveToServer() {
    console.log('sent');
    const {unit, ...rest} = this.firstSelected;
    const firstField = rest;
    console.log(this.firstSelected);
    const {unit: unit2, ...rest2} = this.secondSelected;
    const secondField = rest2;
    const move = new Move(firstField, secondField);

    this.http.post<Move>(localhost + this.moveurl + this.matchId, move, httpOptions).subscribe();
  }

  mouseover() {
  }

}
