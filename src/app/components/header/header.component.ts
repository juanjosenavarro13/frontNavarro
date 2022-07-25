import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  temaOptions: any;
  temaActual: number;
  colorPrimario: string;
  colorSecundario: string;
  nameApp: string;
  constructor(private themeService: ThemeService, private authservice: AuthService) {
    this.nameApp = environment.nameApp;
    this.temaOptions = this.themeService.getTemasOptions();
    this.temaActual = this.themeService.getTemaActual();
    this.colorPrimario = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrimario = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}

  cambiarTema() {
    this.themeService.cambiarTema(this.temaActual);
  }

  logout() {
    this.authservice.logout();
  }
}
