import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root';
  username: string;
  password: string;
 
  constructor(private service: AuthLibService, http: HttpClient) {
    this.service.login('Max', null);

  }
  
}

