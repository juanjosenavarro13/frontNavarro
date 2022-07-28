import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuariosResModel } from '../models/usuariosModel';
import { UsuarioHttpServiceService } from './usuario-http-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  constructor(private usuarioService: UsuarioHttpServiceService) {}

  getUsuarios(): Observable<usuariosResModel> {
    return this.usuarioService.getUsuarios();
  }

  changePage(url: string) {
    return this.usuarioService.changePage(url);
  }
}
