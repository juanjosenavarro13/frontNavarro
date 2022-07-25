import { AuthService } from './auth/services/auth.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.nameApp;
  logeado: boolean;
  constructor(private authService: AuthService) {
    this.logeado = this.authService.getLogeado();
    this.authService.logeado$.subscribe(logeado => {
      this.logeado = logeado;
    });
  }
}
