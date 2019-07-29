import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtResponseService {

  accessToken: string;
  type: string;
  username: string;
  authorities: string[];
}
