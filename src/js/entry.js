import {Age} from './age.js';

export class Entry{
  constructor(birthDate){
    this.birthDate = birthDate;
    this.age = [];
  }

  create(birthDate){
    let newUser = new Age(birthDate);
    this.age.push(newUser);
  }

}
