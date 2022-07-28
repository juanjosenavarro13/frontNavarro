import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpinnerComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [SpinnerComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
