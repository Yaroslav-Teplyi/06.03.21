'use strict'

// Task 1 - Returns true or false, indicating whether the given number is prime.

console.log('isPrime_______')

function isPrime(num) {

    if(num < 2) {
        return false
    }

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(0))                          
console.log(isPrime(1))                          
console.log(isPrime(17))                         
console.log(isPrime(10000000000000))        


// factorial - Returns a number that is the factorial of the given number.

console.log('factorial______')

function factorial(num) {
    if(num < 2) {
        return `!${num} = 1`
    } else {
        let arr = []

        for(let i = 2; i <= num; i++) {
            arr.push(i)
        }

        let reduced = arr.reduce(function(prev, elem) {
            return prev * elem
        })
        return `!${num} = ${reduced}`
    }
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))

// fib - Returns the nth Fibonacci number.

console.log('fib________')

function fib(num) {
    let arr = []

    if(num < 1) {
        return 0
    }

    for(let i = 1; i <= num; i++) {
        if(i === 1) {
            arr.push(1, 1)
            continue
        }
        let sum = arr[i-1] + arr[i-2]

        arr.push(sum)
    }

    return arr[num-1]
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(10))
console.log(fib(20))

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

console.log('isSorted__________')

function isSorted(arr) {

    let newArr = arr.join()
    arr.sort((a, b) => {
        return a - b
    })

    let sortedArr = arr.join()

    return sortedArr == newArr
}

console.log(isSorted([]))
console.log(isSorted([-Infinity, -5, 0, 3, 9]))
console.log(isSorted([3, 9, -3, 10]))

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).

console.log('reverse__________')

function reverse(str) {
    let reversedStr = ''

    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr
}  

console.log(reverse('a'))
console.log(reverse('abcdef'))

//indexOf - Implement the indexOf function for arrays.

console.log('indexOf____________')

function indexOf(arr, elem) {
    return arr.findIndex(e => elem == e)
}

console.log(indexOf([1, 2, 3], 3))
console.log(indexOf([1, 2, 3], 4))

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

console.log('isPalindrome___________')

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join(' ')

    function joined(elem) {
        return elem.toLowerCase().split(' ').join('')
    }

    return joined(reversedStr) === joined(str)
}

console.log(isPalindrome(''))
console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('abcd'))
console.log(isPalindrome('A man a plan a canal Panama'))

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

console.log('missing________')

function missing(arr) {
    arr.sort((a, b) => { return a - b })

    let missingNum = []

    for(let i = 1; i < Math.max.apply(null, arr); i++) {
        let searched = arr.includes(i)

        if(searched !== false)
            continue

        missingNum.push(i)
    }

    if(missingNum.length === 0)
        return undefined

    return missingNum.join(', ')
}

console.log(missing([]))
console.log(missing([1, 4, 3]))
console.log(missing([2, 3, 4]))
console.log(missing([5, 1, 4, 2, 70]))
console.log(missing([1, 2, 3, 4]))

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

console.log('isBalanced_____________')

function isBalanced(str) {
    let modifiedStr = str.replace(/[a-z]/g, '').split(''),
        arr = []

    for(let i = 0; i <= modifiedStr.length; i++) 
        if(modifiedStr[i] === '{' || modifiedStr[i] === '}') 
            arr.push(modifiedStr[i])

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '{' && arr[arr.length - 1] === '}') {
            arr.pop()
            continue
        } else {
            return false
        }
    }

    return true
}

console.log(isBalanced('}{'))
console.log(isBalanced('{{}'))
console.log(isBalanced('{}{}'))
console.log(isBalanced('foo { bar { baz } boo }'))
console.log(isBalanced('foo { bar { baz }'))
console.log(isBalanced('foo { bar } }'))