import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  nameApp: string;
  date: Date;
  colorPrincipal: string;
  colorSecundario: string;
  constructor(private themeService: ThemeService) {
    this.date = new Date();
    this.nameApp = environment.nameApp;
    this.colorPrincipal = this.themeService.getColorPrincipal();
    this.colorSecundario = this.themeService.getColorSecundario2();
    this.themeService.colorPrincipal$.subscribe(color => {
      this.colorPrincipal = color;
    });
    this.themeService.colorSecundario2$.subscribe(color => {
      this.colorSecundario = color;
    });
  }

  ngOnInit(): void {}
}
