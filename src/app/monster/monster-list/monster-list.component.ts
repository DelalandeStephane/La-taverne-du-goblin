import { Component, OnInit } from '@angular/core';

import { Monster } from 'src/app/models/monster.model';
import { Observable, map } from 'rxjs';
import { MonsterService } from 'src/app/monster/monster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  monsters$!: Observable<Monster[]>;

  constructor(private monsterService : MonsterService, private router : Router) { }

  ngOnInit(): void {

    this.monsters$ = this.monsterService.getMonsters().pipe(
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

  onReturnDashboard(){
    this.router.navigateByUrl('/dashboard');
  }

}
