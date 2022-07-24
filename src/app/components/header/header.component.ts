import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  temaOptions: any;
  temaActual: number;
  colorPrimario: string;
  colorSecundario: string;
  constructor(private themeService: ThemeService) {
    this.temaOptions = this.themeService.getTemasOptions();
    this.temaActual = this.themeService.getTemaActual();
    this.colorPrimario = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario();
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrimario = color;
    });
    this.themeService.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}

  cambiarTema() {
    this.themeService.cambiarTema(this.temaActual);
  }
}
