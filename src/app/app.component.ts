import { Component } from '@angular/core';
import { FullpageService } from './core/fullpage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers:[FullpageService]
})
export class AppComponent {
  title = 'app';
  constructor(private fullpageService:FullpageService) {

  }
}
