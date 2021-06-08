import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHouse } from 'src/app/shared/interfaces';
import { IBaseCharacter } from 'src/app/shared/models';
import { HouseService } from 'src/app/shared/services';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
  houseId: string;
  house$: Observable<IHouse> = null;
  overlord$: Observable<IHouse> = null;
  heir$: Observable<IBaseCharacter> = null;
  currentLord$: Observable<IBaseCharacter> = null;
  swornMembers: Array<Observable<IBaseCharacter>> = [];
  constructor(
    private _houseService: HouseService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.houseId = params.id;
    });
    this.house$ = this._houseService.getSingleHouse(this.houseId);
    if (this.house$) {
      this.house$.subscribe((house) => {
        if (house.overlord)
          this.overlord$ = this._houseService.getHouseByURL(house.overlord);
        if (house.heir)
          this.heir$ = this._houseService.getCharacterByURL(house.heir);
        if (house.currentLord)
          this.currentLord$ = this._houseService.getCharacterByURL(
            house.currentLord
          );
        if (house.swornMembers) this.getAllMembers(house.swornMembers);
      });
    }
  }

  getAllMembers(members: Array<string>): void {
    members.forEach((memeber) => {
      this.swornMembers.push(this._houseService.getCharacterByURL(memeber));
    });
  }
}
