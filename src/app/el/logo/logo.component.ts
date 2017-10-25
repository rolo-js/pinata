import { Component, OnInit, Input,ViewChild, ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit,AfterViewInit {

  @Input() state : string;
  @ViewChild('logosvg') mySvg: ElementRef;
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    
  }

}
