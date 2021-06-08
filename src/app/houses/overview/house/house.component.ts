import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHouse } from 'src/app/shared/interfaces';
import { HouseSerice } from 'src/app/shared/services';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  houseId: string;
  house$: Observable<IHouse>;
  overlord$: Observable<any> = null;
  heir$: Observable<any> = null;
  currentLord$: Observable<any> = null;
  swornMembers: Array<Observable<any>> = [];
  constructor(
    private _houseService: HouseSerice,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => (this.houseId = params.id));
    this.house$ = this._houseService.getSingleHouse(this.houseId);
    this.house$.subscribe((house) => {
      console.log(house);
      if (house.overlord)
        this.overlord$ = this._houseService.getWarlord(house.overlord);
      if (house.heir) this.heir$ = this._houseService.getWarlord(house.heir);
      if (house.currentLord)
        this.currentLord$ = this._houseService.getWarlord(house.currentLord);
      if (house.swornMembers)
        house.swornMembers.forEach((memeber) => {
          this.swornMembers.push(this._houseService.getWarlord(memeber));
          this._houseService
            .getWarlord(memeber)
            .subscribe((member) => console.log(member));
        });
    });
  }
}
