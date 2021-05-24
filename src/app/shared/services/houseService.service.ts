import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IHouse, IResponse } from '../interfaces';
import { House } from '../models';

@Injectable({ providedIn: 'root' })
export class HouseSerice {
  constructor(private _http: HttpClient) { }

  getAllHouses(): Observable<Array<House>> {
    return this._http
      .get<Array<IHouse>>('https://anapioficeandfire.com/api/houses')
      .pipe(map((results) => results.map(item => new House(item))));
  }
}
