import {assert} from 'chai';
//the describe block is a test suite
describe('multiply the  number', function(){

   function multiply(a, b){
      return a*b;
   }
   //should run if multiplication of the function parameters gives a coorect answer (1)
   //the function should be defined as well
   it('Check the first multiplication ', function(){
        assert.equal(multiply(1,1), 1)
     }),

   //'it' function contains the function and expected return value to verify 
   it('Check the second multiplication ', function(){
        assert.equal(multiply(3,3), 9)
     })
   
   it('Check the third multiplication ', function(){
        assert.equal(multiply(4,4), 16)
     })
   
   it('Check the third multiplication ', function(){
        assert.equal(multiply(23,45), 23* 45)
     })
   
    

});




