import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ChampionsService} from './champions.service'

/*
 * Home Component
 * Top Level Component
 */
@Component({
  selector: 'junglers',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './junglers.component.css'
  ],
  templateUrl: './junglers.component.html'
})
export class JunglersComponent implements OnInit{
  private junglers = [];

  constructor(private championsService: ChampionsService) {

  }

  ngOnInit() {
    console.log('Initial junglers comp.');
    console.log(this.championsService.getTopJunglers());
    this.championsService.getTopJunglers()
      .subscribe(
        data => this.junglers = data,
        err => console.error('There was an error: ' + err),
        () => console.log('Get Junglers Complete')
      );
  }

  addJungler(event){
    console.log(event);
    let inputName = event.target[0].value;
    let inputType = event.target[1].value;
    let inputImg = event.target[2].value;

    this.junglers.push({'name':inputName,'type':inputType,'imgUrl':inputImg});
    //send to service for send to server
    this.championsService.addTopJunglers(inputName,inputType,inputImg)
      .subscribe(
        data => console.log(data),
        err => console.error('There was an error: ' + err),
        () => console.log('Get Junglers Complete')
      );
  }

}
