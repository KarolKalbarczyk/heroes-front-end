import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './match/game-board/game-board.component';
import { GameFieldComponent } from './match/game-field/game-field.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { httpInterceptorProviders } from './services/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { MatchSearchComponent } from './match/match-search/match-search.component';
import { MatchComponent } from './match/match/match.component';
import { ChatComponent } from './match/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameFieldComponent,
    LoginComponent,
    HomeComponent,
    HomeComponent,
    UserComponent,
    SignupComponent,
    MatchSearchComponent,
    MatchComponent,
    ChatComponent
    

  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
