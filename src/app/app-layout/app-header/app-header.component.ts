import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(private _injector: Injector) {}
  private _router: Router;

  navigate(navigation: string): void {
    this._router = this._injector.get(Router);
    this._router.navigate([navigation]);
  }
}
