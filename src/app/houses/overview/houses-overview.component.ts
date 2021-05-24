import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHouse } from 'src/app/shared/interfaces';
import { HouseSerice } from 'src/app/shared/services';

@Component({
  selector: 'houses-overview',
  templateUrl: './houses-overview.component.html',
  styleUrls: ['./houses-overview.component.sass'],
})
export class HousesOverviewComponent implements OnInit {
  constructor(private _houseService: HouseSerice) { }

  houses$: Observable<Array<IHouse>>;

  ngOnInit(): void {
    this.houses$ = this._houseService.getAllHouses();
  }
}
