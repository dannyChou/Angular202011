import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My APP';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  constructor(){
    setTimeout(() => {
      this.title = 'The Will Will Web';
    }, 2000);

  }
}
