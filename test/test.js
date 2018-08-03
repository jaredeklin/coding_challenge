const assert = require('chai').assert;
const numberToWord = require('../app.js')

describe('numberToWord function', () => {

  it('returns invalid input if not a number', () => {
    
    assert.deepEqual(numberToWord('ten'), 'Invalid input')

  })

  it('returns correct value for 2523.04', () => {
    
    assert.deepEqual(numberToWord(2523.04), 'Two thousand five hundred twenty-three and 04/100 dollars')

  })

  it('returns correct value for 2520.04', () => {
    
    assert.deepEqual(numberToWord(2520.04), 'Two thousand five hundred twenty and 04/100 dollars')

  })

  it('returns correct twenty value', () => {
    
    assert.deepEqual(numberToWord(20), 'Twenty and 00/100 dollars' )

  })

  it('returns correct value for one million one', () => {
    
    assert.deepEqual(numberToWord(1000001), 'One million one and 00/100 dollars' )

  })

  it('returns correct zero with decimal value', () => {
    
    assert.deepEqual(numberToWord(0.34), 'Zero and 34/100 dollars')

  })

  it('returns correct value for a string of 113.56', () => {
    
    assert.deepEqual(numberToWord('113.56'), 'One hundred thirteen and 56/100 dollars')

  })

  it('returns correct value with more than two decimals with rounding', () => {
    
    assert.deepEqual(numberToWord(13.3459), 'Thirteen and 35/100 dollars')

  })

  it('returns correct Trillion value', () => {
    
    assert.deepEqual(numberToWord(198234500000000.57), 'One hundred ninety-eight trillion two hundred thirty-four billion five hundred million and 56/100 dollars')

  })

  it('returns correct Billion value', () => {
    
    assert.deepEqual(numberToWord(456123789456), 'Four hundred fifty-six billion one hundred twenty-three million seven hundred eighty-nine thousand four hundred fifty-six and 00/100 dollars')

  })

  it('returns correct million value', () => {
    
    assert.deepEqual(numberToWord(456123789.5623), 'Four hundred fifty-six million one hundred twenty-three thousand seven hundred eighty-nine and 56/100 dollars')

  })


  it('returns correct value for 1001', () => {
    
    assert.deepEqual(numberToWord(1001), 'One thousand one and 00/100 dollars')

  })  

  it('returns correct value for -12345678.90', () => {
    
    assert.deepEqual(numberToWord(-12345678.90), 'Negative twelve million three hundred forty-five thousand six hundred seventy-eight and 90/100 dollars')

  })
});
