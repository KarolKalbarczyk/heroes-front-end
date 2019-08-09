import {Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { localhost } from 'src/app/app.component';
import {MatchIdHolderService} from '../../services/match-id-holder.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


const HTTP_SEE_OTHER = 303;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {
  shopurl = '/shop/';
  buyurl = 'buy/';
  sellurl = 'sell/';
  localhost = 'http://localhost:8080';
  units = ['Archer', 'Soldier'];
  unitNumbers = {Archer : 0, Soldier: 0};
  unitName: string;
  coins: number;
  interval: any;
  ready = false;
  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;
  id: number;

  constructor(private http: HttpClient, private idholder: MatchIdHolderService, private router: Router,private route: ActivatedRoute) { }

  changeunit(unit) {
    if (this.unitName === unit) {
      this.unitName = undefined;
    } else {
      this.unitName = unit;
      this.checkboxes.forEach((checkbox) => {
        console.log(checkbox.nativeElement.value);
        if (checkbox.nativeElement.value !== unit) {
          checkbox.nativeElement.checked = false;
        }
      });
    }
  }

  ngOnInit() {
    this.interval = setInterval( () => (this.getInfo()), 500);
    this.route.params.subscribe((params: Params) => (this.id = +params.id));
    console.log(this.id);
  }


  getInfo() {
    console.log('shop');
    this.http.get(this.localhost + this.shopurl + this.id, {observe: 'response'}).subscribe( (resp) => {
      this.coins = resp.body as number;
      console.log(resp.body);
      console.log('shop');
      if (resp.status === 200) {
        clearInterval(this.interval);
        this.router.navigate(['/match', this.id]);
      }
      });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  signalReadiness(ready: boolean) {
    console.log(ready + 'ready');
    this.http.post<boolean>(`${this.localhost}${this.shopurl}${this.id}`, ready
    , {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'response'
      }).subscribe( (resp) => {
      if (resp.ok) {
        this.ready = resp.body;
      }
    });
  }

  buy() {
    console.log('buy' + this.unitName);
    this.http.post(this.localhost + this.shopurl + this.buyurl + this.id, this.unitName, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    }).
    subscribe( (rest) => {
      if (rest.ok) {
        this.unitNumbers[this.unitName]++;
      }
    });
  }

  sell() {
    console.log('sell' + this.unitName);
    this.http.delete(this.localhost + this.shopurl + this.sellurl + this.id + '?unitName=' + this.unitName,
      {headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    }).
    subscribe( (rest) => {
      if (rest.ok) {
        this.unitNumbers[this.unitName]--;
      }
    });
  }


}
