import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; 

  constructor( private fb: FormBuilder, private authService : AuthService,private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
    });
  }

  onLogin() {

    if (this.loginForm.invalid) {
      return;
    }
      const value = this.loginForm.value;
      this.authService.signIn(value).subscribe(auth => {
          console.log('check');
          if(!auth){return;} 
        
            this.authService.isLogged(auth);
            this.router.navigateByUrl('/dashboard');
        }
      )
      ;

  }

}
