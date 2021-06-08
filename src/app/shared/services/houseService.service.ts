import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IHouse, IResponse } from '../interfaces';
import { BaseCharacter, House, IBaseCharacter } from '../models';

@Injectable({ providedIn: 'root' })
export class HouseSerice {
  constructor(private _http: HttpClient) {}

  private _API_PREFIX = 'https://anapioficeandfire.com/api/houses';

  getAllHouses(): Observable<Array<House>> {
    return this._http
      .get<Array<IHouse>>(`${this._API_PREFIX}`)
      .pipe(map((results) => results.map((item) => new House(item))));
  }

  getSingleHouse(houseId: string): Observable<House> {
    return this._http
      .get<IHouse>(`${this._API_PREFIX}/${houseId}`)
      .pipe(map((result) => new House(result)));
  }

  getHouseByURL(houseURL: string): Observable<House> {
    return this._http
      .get<IHouse>(`${houseURL}`)
      .pipe(map((result) => new House(result)));
  }

  getCharacterByURL(characterURL: string): Observable<BaseCharacter> {
    return this._http
      .get<IBaseCharacter>(`${characterURL}`)
      .pipe(map((result) => new BaseCharacter(result)));
  }
}
