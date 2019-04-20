import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  username: string;

  constructor(private authService: AuthService, private alertify: AlertifyService) {
    this.username = '';
  }

  private setUsername() {
    this.username = this.authService.decodedToken.unique_name;
  }

  ngOnInit() {
    this.setUsername();
  }

  login() {
    this.authService.login(this.model).subscribe(x => {
      this.alertify.success('Logged in successfully.');
      this.setUsername();
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }
}
