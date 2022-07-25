import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { loginResponse, meResponse, tokenModel, usuario } from '../models/authModel';
import { AuthHttpService } from './auth-http.service';

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

  constructor(private _httpAuthService: AuthHttpService) {
    if (localStorage.getItem('token')) {
      this.setToken(JSON.parse(localStorage.getItem('token') || '{}'));
    }
  }

  getLogeado(): boolean {
    return this.logeado.value;
  }

  getToken(): tokenModel {
    return this.token.value;
  }

  login(usuario: usuario): Observable<loginResponse> {
    return this._httpAuthService.login(usuario);
  }

  setToken(token: tokenModel) {
    this.token.next(token);
    this.logeado.next(true);
    localStorage.setItem('token', JSON.stringify(token));
  }

  logout() {
    this.token.next({} as tokenModel);
    this.logeado.next(false);
    localStorage.removeItem('token');
  }
}
