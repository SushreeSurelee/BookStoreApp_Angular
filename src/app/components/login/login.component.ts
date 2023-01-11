import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup

  constructor(private form:FormBuilder,private user:UserService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(){
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {return this.loginForm.controls;}
  
  onSubmit(){
    if(this.loginForm.valid){
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log('payload',payload)
      this.user.login(payload).subscribe((response: any) => {
        console.log("login sucessfull",response);
        localStorage.setItem('token',response.result._id);

        this.snackbar.open('You have logged in successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition:'right'
        })
      })
    }
  }


}
