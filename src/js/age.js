export class Age{
  constructor(birthDate){
    this.birthDate = birthDate;
    this.formattedDate = new Date(this.birthDate).getTime();
    this.today = new Date().getTime();
    this.age = Math.floor((this.today - this.formattedDate)) / 1000 ;
    this.year = ((this.age/31536000)) ;
    this.lifeExp = 80 - this.year;
    this.mercAge = this.lifeExp / .24;
    this.venusAge = this.lifeExp / .62;
    this.marsAge = this.lifeExp / 1.88;
    this.jupiterAge = this.lifeExp / 11.86;
  }



  userMerc(){
    return (this.year / .24);
  }

  userVenus(){
    return (this.year / .62);
  }

  userMars(){
    return (this.year / 1.88);
  }

  userJupiter(){
    return (this.year / 11.86);
  }


};
