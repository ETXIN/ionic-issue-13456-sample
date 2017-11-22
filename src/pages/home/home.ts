import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, SegmentButton } from 'ionic-angular';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild("slides") slides: Slides;

  initial = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.slides.onlyExternal = true;
    this.slides.keyboardControl = false;
  }

  ionViewDidLoad() {
  }

  segmentChanged(segmentButton: SegmentButton) {
    let index = Number.parseInt(segmentButton.value);

    this.slides.slideTo(index);
  }

}
