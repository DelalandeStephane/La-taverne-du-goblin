import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  @Input() monster!: Monster;

  updateForm!: FormGroup; 

  constructor( private fb: FormBuilder, private monsterService :MonsterService) { }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      role:[this.monster.role,[Validators.required]],
    });
  }

  onUpdateSubmit() {

    if (this.updateForm.invalid) {return;}
    this.monsterService.updateMonster(this.updateForm.value.role).subscribe(() => {
     });
  }

}
