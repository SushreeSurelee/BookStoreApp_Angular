import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  SignUpForm!: FormGroup;

  constructor(private form:FormBuilder,private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.SignUpForm = this.form.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {return this.SignUpForm.controls;}

  onSubmit(){
    if(this.SignUpForm.valid){
      
      let payload = {
        fullName: this.SignUpForm.value.fullName,
        email: this.SignUpForm.value.email,
        password: this.SignUpForm.value.password,
        phone: this.SignUpForm.value.phone
      }
      console.log('payload',payload)
      this.userService.signup(payload).subscribe((response: any) => {
        console.log("Registration Successful",response);
        this.router.navigateByUrl('/login')
      })
    }
  }

}
