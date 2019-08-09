import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './Components/signup/signup.component';
import { MatchSearchComponent } from './match/match-search/match-search.component';
import { MatchComponent } from './match/match/match.component';
import {UnitInfoComponent} from "./match/unit-info/unit-info.component";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {ShopComponent} from "./match/shop/shop.component";




const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'find',
        component: MatchSearchComponent,
    },


    { path: 'match',
      children: [{
           path: ':id', component: MatchComponent}]
    },

  { path: 'shop',
    children: [{
      path: ':id', component: ShopComponent}]
  },

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
      BrowserModule,
      CommonModule,
    FormsModule,

    ],
    exports: [RouterModule],

})
export class AppRoutingModule { }
