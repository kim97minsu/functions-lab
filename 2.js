let reverseString = (str) => {
let newStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
let i = reverseString("baby got back") //calling will execute and return a value 
console.log(i);
