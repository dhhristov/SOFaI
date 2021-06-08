import { Observable, of } from 'rxjs';
import { createHouse } from '../../factories/house.factory';
import { BaseCharacter, House } from '../../models';

export class MockHouseService {
  constructor() {}

  getAllHouses(): Observable<Array<House>> {
    return of([createHouse({})]);
  }

  getSingleHouse(_houseId: string): Observable<House> {
    return of(createHouse({}));
  }

  getHouseByURL(_houseURL: string): Observable<House> {
    return of(createHouse({}));
  }

  getCharacterByURL(_characterURL: string): Observable<BaseCharacter> {
    return of({ name: 'Test Char' });
  }
}
