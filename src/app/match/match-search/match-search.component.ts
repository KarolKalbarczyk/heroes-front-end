import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router} from "@angular/router"
import { interval } from 'rxjs';
import {MatchIdHolderService} from "../../services/match-id-holder.service";

const EXPECTATION_FAILED = 417;

@Component({
  selector: 'app-match-search',
  templateUrl: './match-search.component.html',
  styleUrls: ['./match-search.component.css']
})
export class MatchSearchComponent implements OnInit,OnDestroy {
  interval:any


  constructor(private http:HttpClient, private router:Router,private idholder:MatchIdHolderService) { }

  ngOnInit() {
  }

  startSearch(){
    this.interval = setInterval(() =>{this.search();},200)

  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  search() {
    console.log("a")
    this.http.get("http://localhost:8080/find",{observe:"response"}).subscribe( resp =>{
      if(resp.status !== EXPECTATION_FAILED){
        clearInterval(this.interval)
        this.router.navigate(['/shop',resp.body]);
      }

    })
}
}
