import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    iam: new FormControl('', Validators.required),
    full_name: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    connpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor() { }

  ngOnInit() {
  }

}
