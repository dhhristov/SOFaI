export interface IBaseCharacter {
  name: string;
}

export class BaseCharacter {
  name: string;
  constructor(rawObject: IBaseCharacter) {
    if (rawObject) {
      this.name = rawObject.name;
    }
  }
}
