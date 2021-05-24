import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent],
  imports: [CommonModule],
  exports: [AppHeaderComponent, AppFooterComponent],
})
export class AppLayoutModule {}
