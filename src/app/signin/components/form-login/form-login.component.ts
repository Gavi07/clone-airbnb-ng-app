import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public formGroup: FormGroup;
  public user: IUser;
  public response: boolean;

  constructor( private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.response = false;
    this.formInit();
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  login() {
    this.user = this.formGroup.value;
    this.userService.login(this.user).subscribe( data => {
      console.log(this.user);
      console.log(data);
      if (data.status === 1) {
        localStorage.setItem('token', data.token);
        this.response = false;
        this.router.navigate(['/home']);
      } else {
        this.response = true;
      }
    });
  }

}
