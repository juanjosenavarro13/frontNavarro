import { Component, OnInit } from '@angular/core';
import { meResponse } from './../../auth/models/authModel';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { ThemeService } from '../service/theme.service';

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
  colorSecundario2: string;
  nameApp: string;
  usuario: meResponse;
  loading: boolean;
  constructor(private themeService: ThemeService, private authservice: AuthService) {
    this.loading = true;
    this.usuario = this.authservice.getUsuario();
    this.nameApp = environment.nameApp;
    this.temaOptions = this.themeService.getTemasOptions();
    this.temaActual = this.themeService.getTemaActual();
    this.colorPrimario = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
    this.colorSecundario2 = this.themeService.getColorSecundario2();
  }

  ngOnInit(): void {
    this.load();
    this.getUsuario();
  }

  private load() {
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrimario = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
    this.themeService.colorSecundario2$.subscribe(color => {
      this.colorSecundario2 = color;
    });
  }

  private getUsuario() {
    this.authservice.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      this.loading = false;
    });
  }

  cambiarTema() {
    this.themeService.cambiarTema(this.temaActual);
  }

  logout() {
    this.authservice.logout();
  }
}
