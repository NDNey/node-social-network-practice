// Make a function that does arithmetic!
// JavaScript:
function arithmetic(a, b, operator){
 switch(operator){
     case "add" :
     return a+ b
     break;
     case "subtract":
      return a- b
     break;
     case "multiply":
      return a*b
     break;
     case "divide":
      return a/ b
     break;
 }
  
}

// IP Validation
// JavaScript:
function isValidIP(str) { 
  return /^(?!.*\.$)((?!0\d)(1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(str)
}

// Categorize New Member
// JavaScript:
function openOrSenior(data){
  let answer = []
  for(let i = 0; i < data.length; i++){
    if (data[i][0] >= 55 && data[i][1] > 7){
      answer.push('Senior')
    }else{
      answer.push('Open')
    }
  }
  
  return answer


}

// Check if a triangle is an equable triangle!
// JavaScript:
function equableTriangle(a,b,c) {

  let s = (a+b+c)/2
  let area = Math.sqrt((s)*(s - a)*(s - b)*(s - c))
  
return s*2 === area
}
// Sum of a sequence
// JavaScript:
const sequenceSum = (begin, end, step) => {
 let answer = 0
 for (let i = begin; i <=end ;i+= step){
   answer += i
 }
  return answer
};

// Sum of a Sequence [Hard-Core Version]
// JavaScript:
function sequenceSum(begin, end, step){
  let answer = 0

   for(let i = begin; step > 0 ? i <= end : i >= end ; i+= step){
     answer += i
   }
  return answer
}
// Sums of Parts
// JavaScript:
function partsSums(ls) {
  let answer = [0];
  for (let i = ls.length - 1; i >= 0; i--){
    answer.push(ls[i] + answer[ (ls.length - 1) - i]);
  }
  return answer.reverse();

}

// Generic numeric template formatter
// JavaScript:
function numericFormatter(template, number = '1234567890'){
  let counter = 0
  return template.replace(/[a-z]/gi, () => number[counter++ % number.length])
}

// Small enough? - Beginner
// JavaScript:
function smallEnough(a, limit){
  return a.every(e => e <= limit)
}

// Tortoise racing
// JavaScript:
function race(v1, v2, g) {
  let s = (g * 3600) /( v2 - v1);
  return v1 > v2 ?null:[Math.trunc(s / 3600), Math.trunc((s % 3600) / 60), Math.trunc(s % 60)]
}
// Coding 3min : Jumping Dutch act
// JavaScript:

function sc(floor){
  if(floor <= 1){return ""}
  return floor > 6 ? `${"Aa~ ".repeat(floor-1)}Pa!`:`${"Aa~ ".repeat(floor-1)}Pa! Aa!`
}

// The Hashtag Generator
// JavaScript:
function generateHashtag (str) {

  let newStr =str.replace(/\s+/g, " ")
  if( str.match(/\w\s+\w/) && newStr.length < 100){
       return '#'+newStr.split(' ').map(e => e[0][0].toUpperCase()+ e.slice(1)).join('')
  }else if(!str || str.length  >= 140 ){
    return false
  }
  

     return '#'+newStr.split(' ').map(e => e[0][0].toUpperCase()+ e.slice(1)).join('')
}

// You only need one - Beginner
// JavaScript:
function check(a, x) {
  return a.includes(x)
}
The highest profit wins!
JavaScript:
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}

// The highest profit wins!
// JavaScript:
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}


// [name:Who likes it?]You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.
function likes(names) {
    if(names.length === 0)
      return 'no one likes this';
    else if(names.length === 1)
      return `${names[0]} likes this`;
    else if(names.length === 2)
      return `${names[0]} and ${names[1]} like this`;
    else if(names.length === 3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

//[name: String array duplicates] In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!
function dup(s) {
  let newElement = ''
  for(let i = 0; i <= s.length; i++){
    for(let j = 0; j < s[i].length; j++){
      let element = s[i]
      if(element[j] !== element[j-1]){
        newElement = newElement + element[j]
       }
    }
    s[i] = newElement
    if(i ===  s.length - 1){
      return s
    }
    newElement = ''
  }
};

// [name:Replace With Alphabet Position]
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');


// [name:Unique In Order]
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
return [...iterable].filter((a, i) => a !== iterable[i-1])

//[name:Detect Pangram]
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let answer = new Set(string.toLowerCase().replace(/[^a-z]/g, "") ).size === 26
  return answer
}

//[name:Duplicate Encoder]
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  let answer = word.toLowerCase().split("").map((char,index,array) => array.filter(let => let === char).length > 1 ? ")" : "(" ).join("")
  return answer
}