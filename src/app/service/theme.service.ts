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
  private tema: number;

  constructor() {
    if (localStorage.getItem('tema')) {
      this.tema = Number(localStorage.getItem('tema'));
    } else {
      this.tema = 1;
      localStorage.setItem('tema', this.tema.toString());
    }
    this.cambiarTema(this.tema);
  }

  private setColorPrincipal(color: string) {
    this.colorPrincipal.next(color);
  }
  private setColorSecundario(color: string) {
    this.colorSecundario.next(color);
  }

  getColorPrincipal() {
    return this.colorPrincipal.value;
  }

  getColorSecundario() {
    return this.colorSecundario.value;
  }

  getTema() {
    return this.tema;
  }

  cambiarTema(tema: number) {
    localStorage.setItem('tema', tema.toString());
    if (tema == 1) {
      this.setColorPrincipal('primary');
      this.setColorSecundario('dark');
    }

    if (tema == 2) {
      this.setColorPrincipal('danger');
      this.setColorSecundario('light');
    }
  }
}
