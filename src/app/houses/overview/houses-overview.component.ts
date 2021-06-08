import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IHouse } from 'src/app/shared/interfaces';
import { HouseService } from 'src/app/shared/services';

@Component({
  selector: 'houses-overview',
  templateUrl: './houses-overview.component.html',
  styleUrls: ['./houses-overview.component.scss'],
})
export class HousesOverviewComponent implements OnInit {
  constructor(
    private _houseService: HouseService,
    private _injector: Injector
  ) {}

  houses$: Observable<Array<IHouse>>;

  private _router: Router;

  ngOnInit(): void {
    this.houses$ = this._houseService.getAllHouses();
  }

  navigateToHouse(houseId): void {
    this._router = this._injector.get(Router);
    this._router.navigate([`houses/${houseId}`]);
  }
}
