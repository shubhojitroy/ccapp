import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import 'web-animations-js';

@Component({
  selector: 'ccapp-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
  animations: [
    trigger('testimonialAwesomeAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.05)',
      })),
      //Sequence based animation
      transition('small <=> large', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
        style({opacity: .75, transform: 'translateX(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))),
    ]),
  ]
})
export class LandingpageComponent implements OnInit {
  state: string = 'small'
  constructor() { }

  testimonialShowcase() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
  }

}
