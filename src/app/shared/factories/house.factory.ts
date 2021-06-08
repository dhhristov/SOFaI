import { IHouse } from '../interfaces';

export function createHouse({
  id = '1',
  ancestralWeapons = ['weapon'],
  cadetBranches = ['test'],
  coatOfArms = null,
  currentLord = null,
  diedOut = null,
  founded = null,
  founder = null,
  heir = null,
  name = 'Test name',
  overlord = 'some/overlord/url',
  region = null,
  seats = null,
  swornMembers = ['member1', 'member2'],
  titles = null,
  url = 'testHouse/1',
  words = null,
}): IHouse {
  return {
    id,
    ancestralWeapons,
    cadetBranches,
    coatOfArms,
    currentLord,
    diedOut,
    founded,
    founder,
    heir,
    name,
    overlord,
    region,
    seats,
    swornMembers,
    titles,
    url,
    words,
  };
}