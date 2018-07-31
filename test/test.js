const assert = require('chai').assert;
const numberToWord = require('../app.js')

describe('numberToWord', () => {

  it('returns correct value', () => {
    
    assert.deepEqual(numberToWord(1000), 'One Thousand Dollars')
    assert.deepEqual(numberToWord(13.21), 'Thirteen and 21/100 Dollars')
    assert.deepEqual(numberToWord(100000000), 'One Hundred Million Dollars')
    assert.deepEqual(numberToWord(987654321.89), 'Nine Hundred Eighty Seven Million Six Hundred Fifty Four Thousand Three Hundred Twenty One and 89/100 Dollars')
    assert.deepEqual(numberToWord(456123789456), 'Four Hundred Fifty Six Billion One Hundred Twenty Three Million Seven Hundred Eighty Nine Thousand Four Hundred Fifty Six Dollars')
    // assert.deepEqual(numberToWord(ten), 'One Thousand Dollars')
  })
});
