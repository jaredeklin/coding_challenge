const assert = require('chai').assert;
const numberToWord = require('../app.js')

describe('numberToWord function', () => {

  it('returns correct value', () => {
    
    assert.deepEqual(numberToWord('ten'), 'Invalid input')
    assert.deepEqual(numberToWord(0.34), 'Zero and 34/100 Dollars')
    assert.deepEqual(numberToWord(1000), 'One Thousand Dollars')
    assert.deepEqual(numberToWord(13.2134), 'Thirteen and 2134/10000 Dollars')
    assert.deepEqual(numberToWord(100000000), 'One Hundred Million Dollars')
    assert.deepEqual(numberToWord(-987654321.89), 'Negative Nine Hundred Eighty Seven Million Six Hundred Fifty Four Thousand Three Hundred Twenty One and 89/100 Dollars')
    assert.deepEqual(numberToWord(456123789456), 'Four Hundred Fifty Six Billion One Hundred Twenty Three Million Seven Hundred Eighty Nine Thousand Four Hundred Fifty Six Dollars')
    assert.deepEqual(numberToWord(undefined), 'Invalid input')
    assert.deepEqual(numberToWord(198234500000000.57), 'One Hundred Ninty Eight Trillion Two Hundred Thirty Four Billion Five Hundred Million and 56/100 Dollars')
  })
});
