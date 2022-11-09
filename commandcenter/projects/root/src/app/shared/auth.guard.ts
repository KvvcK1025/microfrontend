import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{
  constructor(private auth : AuthService,private router : Router){

  }
 
  canActivate()
    {
     
       if(this.auth.isLoggedIn){
        return true;
      }
        else {
        this.router.navigate(['login']);
          return false;
            }    
       }


  canActivateChild() : boolean {
    {
     
       if(this.auth.isLoggedIn){
        return true;
      }
        else {
        this.router.navigate(['login']);
          return false;
            }
    
       }
  }
  
}
