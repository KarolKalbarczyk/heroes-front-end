import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {localhost} from "../../app.component";
import {accounturl, avatarurl, passwordurl} from "../my-account/my-account.component";

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  oldPassword: string
  newPassword: string
  message: string

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  changePassword(){
     this.http.post<string>(localhost + accounturl + passwordurl,
       [this.oldPassword, this.newPassword]).
     subscribe(() => (this.message = "ok"),
       error => (this.message = error.error.message));
  }



}
