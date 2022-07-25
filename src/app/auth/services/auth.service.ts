import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { loginResponse, meResponse, usuario } from '../models/authModel';
import { AuthHttpService } from './auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private usuario = new BehaviorSubject<meResponse>({} as meResponse);
  usuario$ = this.usuario.asObservable();
  constructor(private _httpAuthService: AuthHttpService) {
    this.token = this.getTokenLocalstorage();
    if (this.token != '') {
      this._httpAuthService.me(this.token).subscribe(data => {
        this.usuario.next(data);
      });
    }
  }

  private serTokenLocalstorage(token: string) {
    localStorage.setItem('token', token);
  }

  private getTokenLocalstorage(): string {
    return localStorage.getItem('token') || '';
  }

  removeToken() {
    this.token = '';
    localStorage.removeItem('token');
  }

  login(usuario: usuario): Observable<loginResponse> {
    return this._httpAuthService.login(usuario);
  }

  setToken(token: string) {
    this.token = token;
    this.serTokenLocalstorage(token);
  }

  getToken(): string {
    return this.token;
  }

  me(): Observable<meResponse> {
    return this._httpAuthService.me(this.token);
  }
}
