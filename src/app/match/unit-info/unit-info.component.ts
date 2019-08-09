import {Component, Inject, OnInit} from '@angular/core';
import {Unit} from "../unit.model";

@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.component.html',
  styleUrls: ['./unit-info.component.css']
})
export class UnitInfoComponent implements OnInit {
  unit: Unit
  position = {}
  constructor() { }

  ngOnInit() {
  }

}
