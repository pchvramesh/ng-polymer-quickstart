import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: any = {};

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.login);
    this.router.navigate(['/dashboard']);
  }
}
