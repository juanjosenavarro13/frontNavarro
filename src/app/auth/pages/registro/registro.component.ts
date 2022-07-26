import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { registroModel } from '../../models/authModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  err: boolean;
  reg: boolean;
  colorPrincipal: string;
  colorSecundario: string;
  constructor(private themeService: ThemeService, private authService: AuthService, private router: Router) {
    this.err = false;
    this.reg = false;
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
    this.authService.registro(usuario).subscribe(
      data => {
        this.reg = true;
        this.err = false;

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error => {
        this.err = true;
        this.reg = false;
      }
    );
  }
}
