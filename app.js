/*
* i3logix Code Challenge
* 
* Please refer to the README.md for challenge questions and complete your challenge below.
*/

const small = [
  '',
  'One',
  'two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
]

const medium = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
]

const large = [
  'Hundred',
  'Thousand',
  'Million',
  'Billion',
  'Trillion'
]

const decimal = (num) => {
  
  if (num === undefined) {
    return ''
  } 

  return `and ${num}/100`
}

const getWords = (values, scale) => {

  let wordsArray = []

  if (values.length) {
    values.forEach((value, valueIndex) => {
      let match;

      if (valueIndex === 0 || valueIndex === 2) {

        if (value === '0') {
          match = undefined
        } else {
          match = small[value]
        }

        if (valueIndex === 2) {
          if (match !== undefined) {
            match = `${match} Hundred`
          } else {
            match = ''
          }
        }
      
      } else {

        if (value < 2) {
          const teens = parseInt(values.slice(0, 2).reverse().join(''))

          match = small[teens]
          wordsArray[0] = ''

        } else {
          match = medium[value]
          
          if (wordsArray[0] !== undefined) {
            match = match + '-'
          }
        }
      }
      wordsArray = [...wordsArray, match]
    })

    if (scale !== 'Hundred') {
      const check = wordsArray.filter(word => word)
      
      if (check.length) {
        wordsArray = [scale, ...wordsArray]
      }
    }
  }

  return wordsArray.reverse()
}

const buildPhrase = (negative, words, fraction) => {
  const combineValues = [negative, ...words, fraction]
  const joinWords = combineValues.filter(space => space).join(' ').toLowerCase()
  const newWords = joinWords.replace(/- /gi, '-')
  const toUpper = [...newWords]
  toUpper[0] = toUpper[0].toUpperCase()
  const rejoin = toUpper.join('')

  return rejoin + ' dollars'
}


const numberToWord = (num) => {

  const number = parseFloat(num)

  if (isNaN(number)) {
    return 'Invalid input'
  }

  const newNum = number.toFixed(2)
  const splitNumber = newNum.toString().split('.')
  const fraction = decimal(splitNumber[1])
  const splitInt = [...splitNumber[0]]
  let negative = ''
  
  if(splitInt[0] === '-') {
    negative = 'Negative'
    splitInt.splice(0, 1)
  }

  if(splitInt[0] === '0') {
    return buildPhrase(negative, ['Zero'], fraction)
  }

  let reverseDigits = splitInt.reverse().join('')
  const numberChunks = []
 
  while(reverseDigits) {
    if (reverseDigits.length < 3) {
      numberChunks.push(reverseDigits)
      break;
    } else {
      numberChunks.push(reverseDigits.slice(0, 3)) 
      reverseDigits = reverseDigits.slice(3)
    }
  }
  
  const words = numberChunks.map((chunk, index) => {
    const scale = large[index]
    const nums = [...chunk]
    const phrase = getWords(nums, scale)
   
    return phrase
  }).reverse()

  const cleanWords = words.reduce((acc, word) => [...acc, ...word], [])
  const phrase = buildPhrase(negative, cleanWords, fraction)

  return phrase
}

// numberToWord(34)

module.exports = numberToWord

