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
    //arrange
    let userMerc = userAge.userMerc();
    console.log(userAge.year)
    console.log(userMerc)
    expect(userMerc).toBe((userAge.year / .20));
  });

})
