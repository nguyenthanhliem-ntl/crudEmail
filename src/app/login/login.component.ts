import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: '';
password: '';
id: number;
acc=[{
  id: 1,
  email: 'ko@gamil.com',
  password:'123456',
}]
  constructor() {

  }

  ngOnInit() {
  }
onCreate() {
    this.acc.unshift({
        id: this.acc.length +1,
        email: this.email,
        password: this.password,
    })
}

  remote(id: number) {
    const index = this.acc.findIndex(keys => keys.id === id)
    this.acc.splice(index,1);
  }


}
