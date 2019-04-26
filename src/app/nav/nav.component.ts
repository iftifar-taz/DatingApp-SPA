import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  user: User;

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  private setUser() {
    this.user = this.authService.currentUser;
  }

  ngOnInit() {
    if (this.loggedIn()) {
      this.setUser();
      this.authService.currentPhotoUrl.subscribe(x => {
        this.user.photoUrl = x;
      });
    }
  }

  login() {
    this.authService.login(this.model).subscribe(x => {
      this.alertify.success('Logged in successfully.');
      this.setUser();
      this.router.navigate(['/members']);
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.alertify.message('Logged out');
    this.router.navigate(['/']);
  }
}
