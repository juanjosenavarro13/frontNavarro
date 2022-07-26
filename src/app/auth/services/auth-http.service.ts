import { meResponse, registroModel, registroResModel } from './../models/authModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginResponse, usuario } from '../models/authModel';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private _http: HttpClient) {}

  login(usuario: usuario): Observable<loginResponse> {
    return this._http.post<loginResponse>(environment.apiUrl + 'login', usuario);
  }

  me(token: string): Observable<meResponse> {
    let bearer = `Bearer ${token}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    return this._http.post<meResponse>(environment.apiUrl + 'me', {}, { headers });
  }

  registro(usuario: registroModel): Observable<registroResModel> {
    return this._http.post<registroResModel>(environment.apiUrl + 'register', usuario);
  }
}
