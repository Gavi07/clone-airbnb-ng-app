import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (!this.userService.isLoggedUser()) {
        console.log('No estás logueado');
        this.router.navigate(['/signin']);
        return false;
      }
      return true;
  }
}
