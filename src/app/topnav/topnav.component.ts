import { Component, OnInit, OnDestroy } from '@angular/core';
import { FullpageService} from '../core/fullpage.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.less']
})
export class TopnavComponent implements OnInit {
  suscription :Subscription;
  currstate : string = '';

  constructor(private fullpageService : FullpageService) { 
    this.suscription = fullpageService.currentPage$.subscribe(
      currentPage => {
        if (currentPage==2){
          console.log(currentPage,'!');
          this.currstate = 'green';
        }
      }
    );
    

  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
