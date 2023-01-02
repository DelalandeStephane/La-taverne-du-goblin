import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monster } from '../models/monster.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(private http : HttpClient) { }

  public  getMonster() :Observable<Monster> {

    const id = sessionStorage.getItem('auth-id');
    return this.http
      .get< Monster >(`${environment.baseUrl}/monster/get-monster/${id}`);
  }

  public  getMonsters() :Observable<Monster[]> {
    const id = sessionStorage.getItem('auth-id');
    return this.http
      .get< Monster[] >(`${environment.baseUrl}/monster/get-monsters/${id}`);
  }

  public  updateMonster(update: string ) {
    console.log(update)
    const id = sessionStorage.getItem('auth-id');
     return this.http
       .post< Monster>(`${environment.baseUrl}/monster/update-monster/${id}`,{update});
   }

  public  addFriend(friendId: string) :Observable<boolean> {
    const data= {
      friendId,
      userId: sessionStorage.getItem('auth-id')
    };
    return this.http
      .post< boolean>(`${environment.baseUrl}/monster/add-friend`,data);
  }

  
  public  deleteFriend(friendId: string) :Observable<boolean> {
    const data= {
      friendId,
      userId: sessionStorage.getItem('auth-id')
    };
    return this.http
      .post< boolean>(`${environment.baseUrl}/monster/delete-friend`,data);
  }

  public  getFriends() :Observable<Monster[]> {

    const id = sessionStorage.getItem('auth-id');
    return this.http
      .get< Monster[] >(`${environment.baseUrl}/monster/get-friends/${id}`);
  }

}
