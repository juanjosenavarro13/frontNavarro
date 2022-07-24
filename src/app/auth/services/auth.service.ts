import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { loginResponse, usuario } from '../models/authModel';
import { AuthHttpService } from './auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpAuthService: AuthHttpService) {}

  login(usuario: usuario): Observable<loginResponse> {
    return this._httpAuthService.login(usuario);
  }
}
