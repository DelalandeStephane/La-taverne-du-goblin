import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  isLogged(){
    return sessionStorage.getItem('is-logged-in');
  }

  onLogout(){
    this.authService.logout();
  }

}
