import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="Deepti";
  password = '';
  invalidLogin = false;
  errorMsg= "Login failed";
  //Dependency Injection via constructor injection
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleLogin()
  {
    if( this.password=='harivayu')
    {
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    }
    else{
      this.invalidLogin = true;
    }

    console.log(this.username)

  }
}
