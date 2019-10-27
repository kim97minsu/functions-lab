function panDigital(num) { 							//pass on the parameter
	let numString = num.toString()   				//make num into a string (numString)
	let numArray=[]									//define numArray

	// fill out array
	for(let i=0; i<numString.length; i++) {			//numString.length is the length of that string
		let index = Number(numString[i])			//numString[i] is every index, change each to a number
		numArray[index] = numString[i]				//insert number as array's index number
	}

	isPanDigital = "yes"							//first assign isPanDigital yes
	for(let j=1; j<numString.length+1; j++) {		//numString.length+1 is because pandigital is 1...n
		if(typeof numArray[j] !== "string") {  		//if index of array is not a string then not a pandigital
			isPanDigital = "no"	
		}
	}
	if (isPanDigital == "no") 						//subset of 'no', if not no, then pandigital
		console.log ("It is not pandigital")
	else
		console.log ("It is pandigital")


}

panDigital(123)
