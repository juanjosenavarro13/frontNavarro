import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { loginResponse, meResponse, registroModel, registroResModel, tokenModel, usuario } from '../models/authModel';
import { AuthHttpService } from './auth-http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = new BehaviorSubject<tokenModel>({} as tokenModel);
  token$ = this.token.asObservable();
  private usuario = new BehaviorSubject<meResponse>({} as meResponse);
  usuario$ = this.usuario.asObservable();
  private logeado = new BehaviorSubject<boolean>(false);
  logeado$ = this.logeado.asObservable();

  constructor(private _httpAuthService: AuthHttpService, private router: Router) {
    this.inicio();
  }

  inicio() {
    if (localStorage.getItem('token')) {
      this.setToken(JSON.parse(localStorage.getItem('token') || '{}'));
      this.me().subscribe(
        usuario => {
          this.usuario.next(usuario);
        },
        error => {
          this.logout();
        }
      );
    }
  }
  private me() {
    return this._httpAuthService.me(this.getToken().access_token);
  }

  getUsuario() {
    return this.usuario.value;
  }

  getLogeado(): boolean {
    return this.logeado.value;
  }

  setToken(token: tokenModel) {
    this.token.next(token);
    this.logeado.next(true);
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): tokenModel {
    return this.token.value;
  }

  login(usuario: usuario): Observable<loginResponse> {
    return this._httpAuthService.login(usuario);
  }

  logout() {
    this.token.next({} as tokenModel);
    this.logeado.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  registro(usuario: registroModel): Observable<registroResModel> {
    return this._httpAuthService.registro(usuario);
  }
}
