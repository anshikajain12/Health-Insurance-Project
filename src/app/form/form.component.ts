import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  steps:any=1;

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.steps =this.steps+1;
  }

}
