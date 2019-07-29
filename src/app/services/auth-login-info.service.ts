import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginInfoService {

  username: string;
    password: string;
 
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
