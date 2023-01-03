import { Component, OnInit } from '@angular/core';

import { Monster } from 'src/app/models/monster.model';
import { Observable, map } from 'rxjs';
import { MonsterService } from 'src/app/monster/monster.service';


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  monsters$!: Observable<Monster[]>;

  constructor(private monsterService : MonsterService) { }

  

  ngOnInit(): void {

    this.monsters$ = this.monsterService.getFriends().pipe(
      map((monsters) => {
        let i = 0
        monsters.forEach((monster: Monster) => {
          // if actual user
    
          if(monster._id === sessionStorage.getItem('auth-id')){
            monsters.splice(i,1);
          }
          i++;
        })
        return monsters
     

      })
    );

  }

}
