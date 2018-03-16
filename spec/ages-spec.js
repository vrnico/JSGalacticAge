import { Age } from './../src/js/age.js';

describe('Age', function(){

  let userAge;

  beforeEach(function() {
    userAge = new Age('06/05/1991');
  });

  it('should create user age, and convert it to seconds', function(){
    expect(userAge.age).toBeGreaterThan(845123787);
  });

})
