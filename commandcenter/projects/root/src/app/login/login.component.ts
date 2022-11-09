import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  prop: boolean = false;
  // login: Login;
  isLoggedIn = 'false';
  // statusCode: number;
  err: boolean = false;
  erroMsg: any;
  public login_Class = 'form-control';
  loginIsLoader = false;
  show = false;
  constructor(private router: Router) { 
    
  }

  username: string;
  password: string;
 
  ngOnInit(): void {
  }
  login() : void {
    // debugger;
    if(this.username == 'admin' && this.password == 'admin'){
      localStorage.setItem('token',this.username);
     this.router.navigate(["home/dashboardmenu"]);
    
    }
    else if (this.username =='user' && this.password == 'user'){
      localStorage.setItem('token',this.username);
      this.router.navigate(["user/ticket"]);     
    }
    else {
      alert("Invalid credentials");
      
    }
  }
}
