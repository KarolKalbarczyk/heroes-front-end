import { Component, OnInit } from '@angular/core';
import { SignUpInfoService } from 'src/app/services/signup-info.service';
import { AuthService } from 'src/app/services/auth-service.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfoService;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() { }
 
  onSubmit() {
    console.log(this.form);
 
    this.signupInfo = new SignUpInfoService(
      this.form.username,
      this.form.password);
 
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}