import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
declare var jquery: any;
declare var $: any;

@Injectable()
export class FullpageService {
  //private pageChangedSource = new Subject<number>();
  private currentPageSource = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSource.asObservable();

  constructor( private zone: NgZone) { 
    let that = this;
    $(document).ready(function() {
      $('#fullpage').fullpage({
        onLeave: (index, nextIndex, direction) => {
          zone.run(()=>that.currentPageSource.next(nextIndex)) ;
          
        }
      });
    });
  }

}
