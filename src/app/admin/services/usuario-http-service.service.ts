import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { usuariosResModel } from '../models/usuariosModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioHttpServiceService {
  token: string;
  bearer: string;
  headers: HttpHeaders;
  constructor(private _http: HttpClient, authService: AuthService) {
    this.token = authService.getToken().access_token;
    this.bearer = `Bearer ${this.token}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.bearer,
    });
  }

  getUsuarios(): Observable<usuariosResModel> {
    return this._http.get<usuariosResModel>(environment.apiUrl + 'admin/usuariosPaginate', { headers: this.headers });
  }
}
