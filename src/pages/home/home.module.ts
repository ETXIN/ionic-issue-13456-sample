import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { Page1PageModule } from '../page1/page1.module';
import { Page2PageModule } from '../page2/page2.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    Page1PageModule,
    Page2PageModule,
  ],
})
export class HomePageModule { }

