import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { registroModel } from '../../models/authModel';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  err: boolean;
  colorPrincipal: string;
  colorSecundario: string;
  constructor(private themeService: ThemeService) {
    this.err = false;
    this.colorPrincipal = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrincipal = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}

  registro(usuario: registroModel) {
    console.log(usuario);
  }
}
