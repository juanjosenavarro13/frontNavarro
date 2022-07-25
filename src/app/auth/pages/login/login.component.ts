import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { usuario } from '../../models/authModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  colorPrincipal: string;
  colorSecundario: string;
  err: boolean;
  constructor(private AuthService: AuthService, private themeService: ThemeService, private router: Router) {
    this.err = false;
    this.colorPrincipal = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrincipal = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}

  login(usuario: usuario) {
    this.AuthService.login(usuario).subscribe(
      data => {
        this.AuthService.setToken(data);
        this.router.navigate(['/']);
      },
      error => {
        this.AuthService.logout();
        this.err = true;
        setTimeout(() => {
          this.err = false;
        }, 4000);
      }
    );
  }
}
