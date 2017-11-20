import { Component, OnInit, OnDestroy } from '@angular/core';
import { FullpageService} from '../core/fullpage.service';
import { Subscription }   from 'rxjs/Subscription';
import { Output } from '@angular/core/src/metadata/directives';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.less'],
  providers:[NgClass]
})
export class TopnavComponent implements OnInit {
  
  private subscription :Subscription;
  pageNum : number = 2;
  private currstate : string = '';
  isGreen:boolean;


  constructor(
    private fullpageService : FullpageService
  ) { 
    this.isGreen = true;
  }

  ngOnInit() {
    this.subscription = this.fullpageService.currentPage$
      .subscribe(nextpage => {
          this.pageNum = nextpage ;
          this.isGreen = ( nextpage===2 ); 
      });
  }

  onclick(){
    this.isGreen = true;
    console.log(this.isGreen)
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
