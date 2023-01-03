import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MonsterService } from 'src/app/monster/monster.service';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUserForm!: FormGroup; 
  inscriptionSuccess!: boolean;
  monster!: Monster;

  constructor( private fb: FormBuilder, 
    private authService : AuthService, 
   private monsterService : MonsterService) { }

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

  onAddFriend(id : string){
    this.monsterService.addFriend(id).subscribe()
  }
  onNewUserSubmit() {

    if (this.newUserForm.invalid) {return;}

    this.authService.verifyEmail(this.newUserForm.value.email).subscribe((monster) => {
      if( monster) {
        this.newUserForm.get('email')?.setErrors({'already-use': true});
        this.newUserForm.get('email')?.markAsTouched();
        return;
      }
      // If email is available 
      this.authService.signUp(this.newUserForm.value)
      .subscribe((monster) => {

        this.monster = monster;

        // In case user add friend by himself
          if(sessionStorage.getItem('auth-id')) {

            this.onAddFriend(this.monster._id);
            this.newUserForm.reset();
            //fix clear mat error 
            Object.keys(this.newUserForm.controls).forEach(key => {
              this.newUserForm.get(key)?.setErrors(null) ;

            });
    
          } else {
            this.inscriptionSuccess = true;
          }
   
       });

    })
    
  }

}
