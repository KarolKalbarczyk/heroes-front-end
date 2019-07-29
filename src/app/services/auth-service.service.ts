import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfoService } from './auth-login-info.service';
import { JwtResponseService } from './jwt-response.service';
import { SignUpInfoService } from './signup-info.service';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
 
  constructor(private http: HttpClient) {
  }
 
  attemptAuth(credentials: AuthLoginInfoService): Observable<JwtResponseService> {
    return this.http.post<JwtResponseService>(this.loginUrl, credentials, httpOptions);
  }
 
  signUp(info: SignUpInfoService): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}