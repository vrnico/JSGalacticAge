import { Age } from './../src/js/age.js';

describe('Age', function(){

  let userAge;

  beforeEach(function() {
    userAge = new Age('06/05/1991');
  });

  it('should create user age, and convert it to seconds', function(){

    let ageInSeconds = userAge.secondsSince();
    console.log(ageInSeconds);

    expect(ageInSeconds).toBe(1521227240);
  });

})
