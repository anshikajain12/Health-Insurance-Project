import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;

  constructor(public router: Router,private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Gender : [{value:1}]
    });
  }

}
