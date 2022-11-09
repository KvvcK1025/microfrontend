import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import {Router} from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  constructor(private service: AuthLibService, http: HttpClient,private router: Router) {
    this.service.login('Max', null);
  }
  showContent=false;
  showDashboard=true;
  showWidget = false;
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  status: boolean = false;
  statusLink: boolean = false;
  isSideNavCollapsed = false;
  screenWidth = 0;
  
  ngOnInit(): void {
    
  }
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
  }
  onClick() {
    this.showDashboard=false;
  }
  onDashboardClick(){
    this.showDashboard = true;
  }
  widgetClick() {
    this.showWidget = !this.showWidget;
  }
  // hideDashboard(){
  //   this.router.navigateByUrl('"flights/flights-search"');
  //   this.showDashboard=false;
  // }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
