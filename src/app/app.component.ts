import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
      new Quote(1,'Keep your face to the sunshine and you cannot see a shadow','You are enough just as you are',new Date(2018,3,14) ),
      new Quote(2,'Limit your always and your nevers','My mission in life is not merely to survive but to thrive',new Date(2018,6,9)),
      new Quote(3,'Spread love everywhere you go','You get what you give',new Date(2018,1,12)),
      new Quote(4,'Motivation comes from working on things we care about','Life changes very quickly in a very positive way if you let it',new Date(2018,0,18)),
      new Quote(5,'If you look at what you have in life,you will always have more','You must do the things you cannot do',new Date(2018,4,8)),
      ]
}
