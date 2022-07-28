import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SpinnerComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [SpinnerComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
