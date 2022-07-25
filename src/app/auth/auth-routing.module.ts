import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const Routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'registro', component: RegistroComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(Routes)],
})
export class AuthRoutingModule {}
