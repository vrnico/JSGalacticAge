import { Age } from './../src/js/age.js';

describe('Age', function(){

  let userAge;

  beforeEach(function() {
    //arrange
    userAge = new Age('06/05/1991');
  });
//act
  //test 1
  it('should create user age, and convert it to seconds', function(){
    //assert
    expect(userAge.age).toBeGreaterThan(845123787);
  });
  //test 2
  it('should return user mercurian age', function(){
    //arrange             //act
    let userMerc = userAge.userMerc();
    //assert
    expect(userMerc).toBe((userAge.year / .24));
  });

  //test 3
  it('should return user venusian age', function(){
    //arrange             //act
    let userVenus = userAge.userVenus();
    //assert
    expect(userVenus).toBe((userAge.year / .62));
  });

  //test 4
  it('should return user martian age', function(){
    //arrange             //act
    let userMars = userAge.userMars();
    //assert
    expect(userMars).toBe((userAge.year / 1.88));
  });

  //test 5
  it('should return user jupiterian age', function(){
    //arrange             //act
    let userJupiter = userAge.userJupiter();
    console.log(userJupiter)
    //assert
    expect(userJupiter).toBe((userAge.year / 11.86));
  });

  //test 6
  it('should return user remaining years', function(){
    //arrange             //act
    let lifeExp = userAge.lifeExp;
    console.log(lifeExp)
    //assert
    expect(lifeExp).toBe((<53.20113745611364));
  });



})
