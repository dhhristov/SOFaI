import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseService } from './shared/services';
import { BooksOverviewComponent } from './books/books-overview/books-overview.component';

@NgModule({
  declarations: [AppComponent, BooksOverviewComponent],
  providers: [HouseService, HttpClient],
  imports: [AppLayoutModule, BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
