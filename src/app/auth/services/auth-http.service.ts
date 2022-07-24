import { HttpClient } from '@angular/common/http';
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
}
