import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'detail2',
  segment: 'detail2',
  defaultHistory: ['home', 'page2']
})
@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html',
})
export class Detail2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
