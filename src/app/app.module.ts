import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './match/game-board/game-board.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';
import { httpInterceptorProviders } from './services/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchSearchComponent } from './match/match-search/match-search.component';
import { MatchComponent } from './match/match/match.component';
import { ChatComponent } from './match/chat/chat.component';
import { SecondsToMinutesPipe } from './Pipes/seconds-to-minutes.pipe';
import { UnitInfoComponent } from './match/unit-info/unit-info.component';
import { ShopComponent } from './match/shop/shop.component';
import {MatchIdHolderService} from "./services/match-id-holder.service";
import {TokenStorageService} from "./services/token-storage.service";
import { MyAccountComponent } from './Account/my-account/my-account.component';
import { MatchResultComponent } from './Account/match-result/match-result.component';
import { ChangeInfoComponent } from './Account/change-info/change-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    HomeComponent,
    HomeComponent,
    UserComponent,
    SignupComponent,
    MatchSearchComponent,
    MatchComponent,
    ChatComponent,
    SecondsToMinutesPipe,
    UnitInfoComponent,
    ShopComponent,
    MyAccountComponent,
    MatchResultComponent,
    ChangeInfoComponent



  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [httpInterceptorProviders,MatchIdHolderService,TokenStorageService],
  bootstrap: [AppComponent],
  entryComponents: [UnitInfoComponent],
})
export class AppModule { }
