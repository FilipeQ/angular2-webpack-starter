import {Component, ViewEncapsulation, OnInit} from '@angular/core';


/*
 * Home Component
 * Top Level Component
 */
@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './home.component.css'
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{


  constructor() {

  }

  ngOnInit() {
    console.log('Initial home comp.');
  }

}
