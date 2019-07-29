import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpInfoService {

  username: string;
  role: string[];
  password: string;

  constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
      this.role = ['user'];
  }
}
