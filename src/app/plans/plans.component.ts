import { Component, OnInit } from '@angular/core';
import { PLANS } from '../mock-planList';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans=PLANS;
  constructor() { }

  ngOnInit(): void {
  }

}
