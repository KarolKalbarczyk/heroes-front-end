import { Component, OnInit } from '@angular/core';
import {MatchResult} from "../match-result.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../../match/user.model";
import {localhost} from "../../app.component";

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  results:MatchResult[]
  accounturl = "/myAccount"
  resulturl = "/result"
  pageNumber: number
  limit: number

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  getResults(){
    this.http.get<MatchResult[]>
    (`${localhost}${this.accounturl}${this.resulturl}?page=${this.pageNumber}&limit=${this.limit}`)
      .subscribe( (results) =>(this.results = results));
  }

  next(){
    if(this.nextAllowed()){
      this.pageNumber++;
      this.getResults();
    }
  }

  nextAllowed(){
    return this.results.length === this.limit;
  }

  previousAllowed(){
    return this.pageNumber > 0;
  }

  previous(){
    if(this.previousAllowed() ){
      this.pageNumber--;
      this.getResults();
    }
  }

}
