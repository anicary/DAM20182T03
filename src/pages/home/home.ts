import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 })
 export class HomePage {
    public myString: string = 'ejemplo 1 STRING';
    public myJSON: any = {text: ''};
    otherPage: any = OtherPage;
  constructor(public navCtrl: NavController) {
  }
    gotoOtherPage() {
    this.navCtrl.push(OtherPage, {text: 'ejemplo 3 OBJETO'});
    }
  }