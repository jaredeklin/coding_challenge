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
  '', 
  'Hundred', 
  'Thousand', 
  'Million', 
  'Billion'
]

const decimal = (num) => {
  if (num === undefined) {
    return ''
  } else {
    return `and ${num}/100`
  }
}

const getWords = (values, scale) => {

  let wordsArray = []
  
  if (values.length) {
    values.forEach((x, valueIndex) => {
 
    let match;

    if (valueIndex === 0 || valueIndex === 2) {
      match = small.find((integer, index) => {
     
        if (x == index) {
          if (integer === undefined) {
            return ''
          } else {
            return integer
          }     
        }
      })

      if (valueIndex === 2) {
        match = `${match} Hundred`
      }
    
    } else {

      if (x < 2) {
        const teens = values.slice(0, 2).reverse().join('')
      
        match = small.find((digit, digitIndex) => {
        
          if (teens == digitIndex) {
            return digit
          }
        })

        wordsArray[0] = ''

      } else {

        match = medium.find((tens, tensIndex) => {

          if (x == tensIndex) {
            return tens
          }
        })
      }
    }
    wordsArray = [...wordsArray, match]
  })

  if (scale !== 'Hundred') {
    wordsArray = [scale, ...wordsArray]
  }

  }

  return wordsArray.reverse()
}


const numberToWord = (num) => {

  const splitNumber = num.toString().split('.')
  const splitInt = [...splitNumber[0]]
  const fraction = decimal(splitNumber[1])

  let hundred = []
  let thousand = []
  let million = []
  let billion = []
  let count = 0

  for (let i = splitInt.length - 1; i >= 0; i--) {

    if (count < 3) {
      hundred.push(splitInt[i])
    } else if (count < 6) {
      thousand.push(splitInt[i])
    } else if (count < 9) {
      million.push(splitInt[i])
    } else if (count < 12)  {
      billion.push(splitInt[i])
    }
  
    count++
  }

  const bil = getWords(billion, 'Billion')
  const mil = getWords(million, 'Million')
  const thou = getWords(thousand, 'Thousand')
  const hund = getWords(hundred, 'Hundred')

  const combineValues = [...bil, ...mil, ...thou, ...hund, fraction, 'dollars']
  const joinWords = combineValues.filter(space => space).join(' ')

  return joinWords
}

numberToWord(1052343423.45)