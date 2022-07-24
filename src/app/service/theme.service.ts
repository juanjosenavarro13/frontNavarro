import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private colorPrincipal = new BehaviorSubject<string>('primary');
  colorPrincipal$ = this.colorPrincipal.asObservable();
  private colorSecundario = new BehaviorSubject<string>('dark');
  colorSecundario$ = this.colorSecundario.asObservable();

  private temaOptions: any;
  private temaActual: number = 0;

  constructor() {
    this.temaOptions = [
      {
        id: 0,
        nombre: 'azul',
        colorPrincipal: 'primary',
        colorSecundario: 'dark',
      },
      {
        id: 1,
        nombre: 'rojo',
        colorPrincipal: 'danger',
        colorSecundario: 'light',
      },
      {
        id: 2,
        nombre: 'verde',
        colorPrincipal: 'success',
        colorSecundario: 'light',
      },
    ];

    if (localStorage.getItem('tema')) {
      this.temaActual = Number(localStorage.getItem('tema'));
      this.cambiarTema(this.temaActual);
    } else {
      this.temaActual = 0;
      localStorage.setItem('tema', '0');
    }
  }

  private setColorPrincipal(color: string) {
    this.colorPrincipal.next(color);
  }
  private setColorSecundario(color: string) {
    this.colorSecundario.next(color);
  }

  getTemasOptions() {
    return this.temaOptions;
  }

  getColorPrincipal() {
    return this.colorPrincipal.value;
  }

  getColorSecundario() {
    return this.colorSecundario.value;
  }

  getTemaActual() {
    return this.temaActual;
  }

  cambiarTema(tema: number) {
    this.temaActual = tema;
    localStorage.setItem('tema', tema.toString());
    this.setColorPrincipal(this.temaOptions[tema].colorPrincipal);
    this.setColorSecundario(this.temaOptions[tema].colorSecundario);
  }
}
