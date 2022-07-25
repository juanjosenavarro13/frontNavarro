import { meResponse } from './../../auth/models/authModel';
import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/auth/models/authModel';
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
  usuario: meResponse;
  loading: boolean;
  constructor(private themeService: ThemeService, private authservice: AuthService) {
    this.loading = false;
    this.usuario = this.authservice.getUsuario();
    this.nameApp = environment.nameApp;
    this.temaOptions = this.themeService.getTemasOptions();
    this.temaActual = this.themeService.getTemaActual();
    this.colorPrimario = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
  }

  ngOnInit(): void {
    this.load();
    this.getUsuario();
    this.loading = true;
  }

  private load() {
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrimario = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  private getUsuario() {
    this.authservice.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  cambiarTema() {
    this.themeService.cambiarTema(this.temaActual);
  }

  logout() {
    this.authservice.logout();
  }
}
