export class Age{
  constructor(birthDate){
    this.birthDate = birthDate;
    this.formattedDate = new Date(this.birthDate).getTime();
    this.today = new Date().getTime();
    this.age = Math.floor((this.today - this.formattedDate)) / 1000 ;
  }

secondsSince() {
  return (Math.floor(this.today));
  }

};
