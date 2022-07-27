import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  colorPrincipal: string;
  colorSecundario: string;
  constructor(private themeservice: ThemeService) {
    this.colorPrincipal = this.themeservice.getColorPrincipal();
    this.colorSecundario = this.themeservice.getColorSecundario();
    this.themeservice.colorPrincipal$.subscribe(color => {
      this.colorPrincipal = color;
    });
    this.themeservice.colorSecundario$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}
}
