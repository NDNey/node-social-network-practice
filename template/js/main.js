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