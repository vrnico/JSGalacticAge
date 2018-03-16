export class Age{
  constructor(birthDate){
    this.birthDate = birthDate;
    this.formattedDate = new Date(this.birthDate).getTime();
    this.today = new Date().getTime();
    this.age = Math.floor((this.today - this.formattedDate)) / 1000 ;
    this.year = ((this.age/31536000)) ;
  }

  userMerc(){
    return (this.year / .24);
  }

};
