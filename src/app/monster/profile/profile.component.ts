import { Component, OnInit, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() monster!: Monster;
  constructor() { }

  ngOnInit(): void {
  
  }

}
