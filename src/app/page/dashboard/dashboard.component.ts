import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';
import { Observable } from 'rxjs';
import { MonsterService } from 'src/app/monster/monster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  monster$!: Observable<Monster>;

  constructor(private monsterService : MonsterService, private router: Router) { }

  ngOnInit(): void {
    this.monster$ = this.monsterService.getMonster();
  }

  OnFindGoblins() {
    this.router.navigateByUrl('/find-friends');
  }

}
