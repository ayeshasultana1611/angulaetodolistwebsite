import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'ADMIN'
  password = 'ADMIN'
    errorMessage = 'Invalid Credentials'
    invalidLogin = false
    handleLogin(){
      // console.log(this.username);
      if(this.username==="ADMIN" && this.password ==="ADMIN"){
          this.invalidLogin = false
      } else {
      this.invalidLogin = true
      }
      this.router.navigate(['welcome'])
  }
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.navigate(['welcome',this.username])
  }

}

