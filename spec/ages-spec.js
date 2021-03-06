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
    //assert
    expect(userJupiter).toBe((userAge.year / 11.86));
  });

  //test 6
  it('should return user remaining years', function(){
    //arrange             //act
    let lifeExp = userAge.lifeExp;
    //assert
    expect(lifeExp).toBeLessThan(53.20113745611364);
    //literally counting the seconds until my death
  });

  //test 7
  it('should return user remaining years on mercury', function(){
    //arrange             //act
    let mercAge = userAge.mercAge;
    //assert
    expect(mercAge).toBeLessThan(221.67121424020698);

  });

  //test 8
  it('should return user remaining years on venus', function(){
    //arrange             //act
    let venusAge = userAge.venusAge;
    //assert
    expect(venusAge).toBeLessThan(85.80819894836009);

  });

  //test 9
  it('should return user remaining years on mars', function(){
    //arrange             //act
    let marsAge = userAge.marsAge;
    //assert
    expect(marsAge).toBeLessThan(28.29844507239953);

  });

  //test 9
  it('should return user remaining years on jupiter', function(){
    //arrange             //act
    let jupiterAge = userAge.jupiterAge;
    //assert
    expect(jupiterAge).toBeLessThan(4.485755464022273);

  });

  //venus 85.80819894836009
  //mars 28.29844507239953
  //
  //
  //





})
