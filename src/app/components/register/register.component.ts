import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  SignUpForm!: FormGroup;

  constructor(private form:FormBuilder,private userService:UserService,private router:Router,private snackbar:MatSnackBar){}

  ngOnInit(): void {
    this.SignUpForm = this.form.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    });
  }

  get f() {return this.SignUpForm.controls;}

  onSubmit(){
    if(this.SignUpForm.valid){
      
      let payload = {
        fullName: this.SignUpForm.value.fullName,
        emailId: this.SignUpForm.value.email,
        password: this.SignUpForm.value.password,
        mobileNumber: this.SignUpForm.value.phone,
      }
      console.log('payload',payload)
      this.userService.signup(payload).subscribe((response: any) => {
        console.log("Registration Successful",response);
        this.router.navigateByUrl('/login')

        this.snackbar.open('you have sucessfully registred', '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition:'center'
        })
      })
    }
  }

}
