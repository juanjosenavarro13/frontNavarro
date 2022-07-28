import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/service/theme.service';
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
  colorPrincipal: string;
  colorSecundariio: string;
  constructor(private usuarioService: UsuarioServiceService, private themeservice: ThemeService) {
    this.loading = true;
    this.usuarios = {} as usuariosResModel;
    this.colorPrincipal = this.themeservice.getColorPrincipal();
    this.colorSecundariio = this.themeservice.getColorSecundario();
    this.themeservice.colorPrincipal$.subscribe(data => {
      this.colorPrincipal = data;
    });
    this.themeservice.colorSecundario$.subscribe(data => {
      this.colorSecundariio = data;
    });
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }

  pagSiguiente() {
    this.loading = true;
    this.usuarioService.changePage(this.usuarios.next_page_url).subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }
  pagAnterior() {
    this.loading = true;
    this.usuarioService.changePage(this.usuarios.prev_page_url).subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }
}
