import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUserForm!: FormGroup; 
  inscriptionSuccess!: boolean;

  constructor( private fb: FormBuilder, private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.inscriptionSuccess = false;
    this.newUserForm = this.fb.group({
      monsterName:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
      role:['',[Validators.required]],
    });
  }

  public async confirmEmail() {
    if(this.newUserForm.value.email && this.newUserForm.get('email')?.hasError('email') === false ){
       this.authService.verifyEmail(this.newUserForm.value.email).subscribe((result) => {
           if(result){
             this.newUserForm.get('email')?.setErrors({'already-use': true});
             this.newUserForm.get('email')?.markAsTouched();
           }
       })
    }
 }

  onNewUserSubmit() {

    if (this.newUserForm.invalid) {return;}
    
    this.authService.signUp(this.newUserForm.value).subscribe(response => {
        if(response) {
          this.newUserForm.get('email')?.setErrors({'already-use': true});
          this.newUserForm.get('email')?.markAsTouched();
          return;
        }
        this.inscriptionSuccess = true;
     });
  }

}
