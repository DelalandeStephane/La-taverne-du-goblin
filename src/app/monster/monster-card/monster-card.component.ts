import { Component, Input, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';
import { MonsterService } from '../monster.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {

  @Input() isFriend!: boolean;
  @Input() monster! : Monster;

  constructor( private monsterService : MonsterService) { }

  ngOnInit(): void {
  }

  onAddFriend(){
    this.monsterService.addFriend(this.monster._id).subscribe(() => {
      this.isFriend = true;
    })
  }

  
  onDeleteFriend(){
    this.monsterService.deleteFriend(this.monster._id).subscribe(() => {
      this.isFriend = false;
    })
  }

}
