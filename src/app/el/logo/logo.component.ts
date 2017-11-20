import { Component, OnInit, Input,ViewChild, ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit, AfterViewInit {

  private _state ='';
  
  @Input()
  isGreen: boolean = false;

  @ViewChild('logosvg') mySvg: ElementRef;

  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

}
