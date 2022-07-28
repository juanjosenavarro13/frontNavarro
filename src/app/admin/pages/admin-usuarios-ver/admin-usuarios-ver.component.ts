import { Component, OnInit } from '@angular/core';
import { usuariosResModel } from '../../models/usuariosModel';
import { UsuarioServiceService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-admin-usuarios-ver',
  templateUrl: './admin-usuarios-ver.component.html',
  styleUrls: ['./admin-usuarios-ver.component.scss'],
})
export class AdminUsuariosVerComponent implements OnInit {
  usuarios: usuariosResModel;
  loading: boolean;
  constructor(private usuarioService: UsuarioServiceService) {
    this.loading = true;
    this.usuarios = {} as usuariosResModel;
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }
}
