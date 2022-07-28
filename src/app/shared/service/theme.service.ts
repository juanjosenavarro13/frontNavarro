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
  private colorSecundario2 = new BehaviorSubject<string>('light');
  colorSecundario2$ = this.colorSecundario2.asObservable();

  private temaOptions: any;
  private temaActual: number = 0;

  constructor() {
    this.temaOptions = [
      {
        id: 0,
        nombre: 'negro',
        colorPrincipal: 'dark',
        colorSecundario: 'dark',
        colorSecundario2: 'light',
      },
      {
        id: 1,
        nombre: 'rojo',
        colorPrincipal: 'danger',
        colorSecundario: 'dark',
        colorSecundario2: 'light',
      },
      {
        id: 2,
        nombre: 'verde',
        colorPrincipal: 'success',
        colorSecundario: 'dark',
        colorSecundario2: 'light',
      },
      {
        id: 3,
        nombre: 'azul',
        colorPrincipal: 'primary',
        colorSecundario: 'dark',
        colorSecundario2: 'light',
      },
    ];

    if (localStorage.getItem('tema')) {
      this.temaActual = Number(localStorage.getItem('tema'));
      if (this.temaActual <= this.temaOptions.length) {
        this.cambiarTema(this.temaActual);
      } else {
        this.reiniciarTema();
      }
    } else {
      this.reiniciarTema();
    }
  }

  private reiniciarTema() {
    this.temaActual = 0;
    localStorage.setItem('tema', '0');
  }

  private setColorPrincipal(color: string) {
    this.colorPrincipal.next(color);
  }
  private setColorSecundario(color: string) {
    this.colorSecundario.next(color);
  }

  private setColorSecundario2(color: string) {
    this.colorSecundario2.next(color);
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
  getColorSecundario2() {
    return this.colorSecundario2.value;
  }

  getTemaActual() {
    return this.temaActual;
  }

  cambiarTema(tema: number) {
    this.temaActual = tema;
    localStorage.setItem('tema', tema.toString());
    this.setColorPrincipal(this.temaOptions[tema].colorPrincipal);
    this.setColorSecundario(this.temaOptions[tema].colorSecundario);
    this.setColorSecundario2(this.temaOptions[tema].colorSecundario2);
  }
}
