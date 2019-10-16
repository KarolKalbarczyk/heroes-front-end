import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {localhost} from "../../app.component";
import {User} from "../../match/user.model";
import {MatchResult} from "../match-result.model";

export const  accounturl = "/myAccount"
export  const resulturl = "/result/"
export const passwordurl = "/password/"
export const avatarurl = "/avatar/"

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user:User


  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.http.get<User>(localhost + accounturl).subscribe( (user) =>(this.user = user));
  }

  getResults(){
    this.http.get<User>(localhost + accounturl).subscribe( (user) =>(this.user = user));
  }

}
