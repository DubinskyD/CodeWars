// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace 
//  the missing second character of the final pair with an underscore ('_').

// Examples
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

//Solution
let ourFirstString = 'HelloWorld'
let ourSecondString = 'MyNameIsVasia'

function solution(str) {
   if (str.length % 2 !== 0) { str = str + "_" } // even or odd ?
   let result = [];
   for (let i = 0; i < str.length; i = i + 2) {
      result.push(`${str.charAt(i)}${str.charAt(i + 1)}`)
   }
   return console.log(result)
}

solution(ourFirstString)
solution(ourSecondString)