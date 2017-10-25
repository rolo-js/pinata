import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
declare var jquery: any;
declare var $: any;

@Injectable()
export class FullpageService {
  //private pageChangedSource = new Subject<number>();
  private currentPageSource = new Subject<number>();

  constructor() { 
    let that = this;
    $(document).ready(function() {
      $('#fullpage').fullpage({
        onLeave: (index, nextIndex, direction) => {
          that.currentPageSource.next(nextIndex);
          
        }
      });
    });
  }
  currentPage$ = this.currentPageSource.asObservable();

}
