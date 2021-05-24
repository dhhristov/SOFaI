import { IHouse } from '../interfaces';

export class House implements IHouse {
  ancestralWeapons: Array<string>;
  cadetBranches: Array<string>;
  coatOfArms: string;
  currentLord: string;
  diedOut: string;
  founded: string;
  founder: string;
  heir: string;
  name: string;
  overlord: string;
  region: string;
  seats: Array<string>;
  swornMembers: Array<string>;
  titles: Array<string>;
  url: string;
  words: string;
  constructor(rawObject: IHouse) {
    if (rawObject) {
      this.ancestralWeapons = rawObject.ancestralWeapons;
      this.cadetBranches = rawObject.cadetBranches;
      this.coatOfArms = rawObject.coatOfArms;
      this.currentLord = rawObject.currentLord;
      this.diedOut = rawObject.diedOut;
      this.founded = rawObject.founded;
      this.founder = rawObject.founder;
      this.heir = rawObject.heir;
      this.name = rawObject.name;
      this.overlord = rawObject.overlord;
      this.region = rawObject.region;
      this.seats = rawObject.seats;
      this.swornMembers = rawObject.swornMembers;
      this.titles = rawObject.titles;
      this.url = rawObject.url;
      this.words = rawObject.words;
    }
  }
}
