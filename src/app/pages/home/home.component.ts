import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthHttpService } from 'src/app/auth/services/auth-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
