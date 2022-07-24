import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.AuthService.login({ email: 'admin@admin.es', password: '123123' }).subscribe(res => {
      console.log(res);
    });
  }
}
