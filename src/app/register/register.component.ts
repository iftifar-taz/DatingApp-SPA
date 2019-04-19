import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter<any>();
  model: any = {};

  constructor(private _as: AuthService) { }

  ngOnInit() {
  }

  register() {
    this._as.register(this.model).subscribe(x => {
      console.log('Registration successful');
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
