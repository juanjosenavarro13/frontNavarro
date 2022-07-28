import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-usuarios-editar',
  templateUrl: './admin-usuarios-editar.component.html',
  styleUrls: ['./admin-usuarios-editar.component.scss'],
})
export class AdminUsuariosEditarComponent implements OnInit {
  idUsuario: number;
  constructor(private rutaActive: ActivatedRoute) {
    this.idUsuario = this.rutaActive.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.idUsuario);
  }
}
