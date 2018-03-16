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
    console.log(userVenus);
    //assert
    expect(userVenus).toBe((userAge.year / .62));
  });

  //test 4
  it('should return user martian age', function(){
    //arrange             //act
    let userMars = userAge.userMars();
    console.log(userMars);
    //assert
    expect(userMars).toBe((userAge.year / .62));
  });

})
