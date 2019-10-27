let reverseString = (str) => {
<<<<<<< HEAD
	let newStr = "";
 	for(let i = str.length - 1; i >= 0; i--) {
  		newStr = newStr + str[i];
  	}
  	return newStr;
}

let i = reverseString("baby got back") //calling will execute and return a value 
console.log(i);
=======
	return str.split('').reverse().join('');
}

let message = reverseString("Hello, world!")
console.log(message)
>>>>>>> cfc4ebeefd281e75bbfb9bf0adbcc3b41bf46904
