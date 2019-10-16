import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";
import {accounturl, avatarurl} from "./Account/my-account/my-account.component";
import {HttpClient} from "@angular/common/http";
import {User} from "./match/user.model";
import {DomSanitizer} from "@angular/platform-browser";

export const localhost:string = "http://localhost:8080";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  str: any
  imgsrc

  constructor(private tokenStorage: TokenStorageService,private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  changeAvatar(event){
    const file = event.target.files.item(0);
    const filee = new FormData();
    filee.append("file", file)
    this.http.post(localhost+accounturl+avatarurl,filee).subscribe();
  }

  getAvatar(){
    this.http.get<any>(localhost+accounturl+"/avat").subscribe( (data) =>{
      console.log("aadas")
      this.imgsrc = window.URL.createObjectURL(data)
      console.log(this.imgsrc)});
  }
}
