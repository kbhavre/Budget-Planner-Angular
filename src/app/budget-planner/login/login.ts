import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar){

    }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  toggleForm(form: 'login'|'register'){
    this.activeForm = form;
  }

  login(){
    if(this.loginForm.valid){
      console.log("Login Info ==> ", this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard']);
    }
    else{
      this.snackBar.open('Invalid Emaili or Password!', 'Close', {duration: 3000});
    }
  }

  register(){
    if(this.registerForm.valid){
      console.log("Register Info ==> ", this.registerForm.value);
      setTimeout(() => {
        window.location.reload(); 
      }, 2000);
      this.router.navigate(['/budget-planner/login']);
    }
    else{
      this.snackBar.open('Please fill in all the fields correctly!', 'Close', {duration: 3000});
    }
  }
}
