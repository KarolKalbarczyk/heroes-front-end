import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router} from "@angular/router"
import { interval } from 'rxjs';

const EXPECTATION_FAILED = 417;

@Component({
  selector: 'app-match-search',
  templateUrl: './match-search.component.html',
  styleUrls: ['./match-search.component.css']
})
export class MatchSearchComponent implements OnInit {
  interval:any


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  startSearch(){
    this.interval = setInterval(() =>{this.search();},200)
    
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  search(){
    this.http.get("http://localhost:8080/find",{observe:"response"}).subscribe( resp =>{
      if(resp.status !== EXPECTATION_FAILED){
      clearInterval(this.interval)  
      this.router.navigate(['/match',resp.body])
    }
  })
  }
}
