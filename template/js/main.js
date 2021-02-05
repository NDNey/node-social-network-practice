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