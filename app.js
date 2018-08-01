/*
* i3logix Code Challenge
* 
* Please refer to the README.md for challenge questions and complete your challenge below.
*/


const small = [
  '',
  'One',
  'Two',
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
  'Ninty'
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
  } else {
    let denominator = 1;

    if (num.length) {
      for (let i = 0; i < num.length; i++) {
        denominator = denominator + '0'
      }   
    }

    return `and ${num}/${parseInt(denominator)}`
  }
}

const getWords = (values, scale) => {

  let wordsArray = []

  if (values.length) {
    values.forEach((value, valueIndex) => {
 
      let match;

      if (valueIndex === 0 || valueIndex === 2) {
        match = small.find((integer, index) => {
       
          if (value == index) {
            if (integer === undefined) {
              return ''
            } else {
              return integer
            }     
          }
        })

        if (valueIndex === 2) {
          if (match !== undefined) {
            match = `${match} Hundred`
          } else {
            match = ''
          }
        }
      
      } else {

        if (value < 2) {
          const teens = values.slice(0, 2).reverse().join('')
        
          match = small.find((digit, digitIndex) => {
          
            if (teens == digitIndex) {
              return digit
            }
          })

          wordsArray[0] = ''

        } else {

          match = medium.find((tens, tensIndex) => {

            if (value == tensIndex) {
              return tens
            }
          })
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
  const joinWords = combineValues.filter(space => space).join(' ')

  return joinWords + ' Dollars'
}


const numberToWord = (num) => {

  if (typeof(num) !== 'number') {
    return 'Invalid input'
  }

  let negative = ''
  const splitNumber = num.toString().split('.')
  const fraction = decimal(splitNumber[1])
  const splitInt = [...splitNumber[0]]
  
  if(splitInt[0] === '-') {
    negative = 'Negative'
    splitInt.splice(0, 1)
  }

  if(splitInt[0] === '0') {
    return buildPhrase(negative, ['Zero'], fraction)
  }

  let reverseDigits = splitInt.reverse().join('')
  const  numberChunks = []
 
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

