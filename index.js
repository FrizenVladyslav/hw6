const isPrime = number => {
  if (number < 1) {
    return false
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
      return true
    }
  }
}

const factorial = number => {
  if (number === 0) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

const fib = number => {
  let array = [0, 1]
  for (let i = 2; i < number + 1; i++) {
    array.push(array[i - 2] + array[i - 1])
  }
  return array[number]
}

const isSorted = array => {
  let sorted = true
  array.forEach((item, index) => {
    if (item > array[++index]) return sorted = false
  })
  return sorted
}

const reverse = string => {
  let reversedString = ''
  for (let i = --string.length; i > -1; i--) {
    reversedString += string[i]
  }
  return reversedString
}

const isPalindrome = string => {
  str = string.replace(/ /g, '').toLowerCase()
  return str == str.split('').reverse().join('').toLowerCase()
}

const missing = array => {
  let missedNumber
  array.sort((a, b) => a - b)
  array.forEach((item, index) => {
    if (array[++index] - item > 1) missedNumber = ++item
  })
  return missedNumber
}

const isBalanced = string => {
  let array = string.split('')
  let balanced = true
  let countLeft = 0
  let countRight = 0

  array.forEach(item => {
    if (item == '}') countRight++
    if (item == '{') countLeft++
  })

  if (countLeft !== countRight) {
    balanced = false
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == '{') {
        balanced = false
        for (let j = i; j < array.length; j++) {
          if (array[j] == '}') {
            balanced = true
            array[j] = null
            break;
          }
        }
      }
    }
  }

  return balanced
}

console.log('====================================')
console.log('isPrime')
console.log(isPrime(17))
console.log('====================================')

console.log('====================================')
console.log('factorial')
console.log(factorial(6))
console.log('====================================')

console.log('====================================')
console.log('fib')
console.log(fib(20))
console.log('====================================')

console.log('====================================')
console.log('isSorted')
console.log(isSorted([3, 9, -3, 10]))
console.log('====================================')

console.log('====================================')
console.log('reverse')
console.log(reverse('abcdef'))
console.log('====================================')

console.log('====================================')
console.log('isPalindrome')
console.log(isPalindrome('A man a plan a canal Panama'))
console.log('====================================')

console.log('====================================')
console.log('missing')
console.log(missing([1, 2, 3, 4]))
console.log('====================================')

console.log('====================================')
console.log('isBalanced')
console.log(isBalanced('foo { bar } }'))
console.log('====================================')