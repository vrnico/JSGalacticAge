export class Age{
  constructor(birthDate){
    this.birthDate = birthDate;
    this.formattedDate = new Date(this.birthDate).getTime() / 1000;
    this.today = new Date().getTime() / 1000;
    this.age = Math.floor((this.day - this.birthday) / 31622400);
  }

secondsSince() {
  return (Math.floor(this.today));
  }

};
