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

const numberToWord = (num) => {
  const splitNumber = num.toString().split('.')

  const fraction = decimal(splitNumber[1])

  const splitInt = [...number[0]]
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
    } else if (count < 12) {
      billion.push(splitInt[i])
    }

    count++
  }

  hundred = hundred.reverse()
  thousand = thousand.reverse()
  million = million.reverse()
  billion = billion.reverse()
}



