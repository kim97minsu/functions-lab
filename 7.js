let calculate = (x, y, operation) => {

	if(operation === "add") {
		return (x + y)
	} else if(operation === "subtract") {
		return (x - y)
	} else if(operation === "multiply") {
		return (x * y)
	} else if(operation === "divide") {
		return (x / y)
	} else if(y === "sqrt" || operation === '') {
		return (Math.sqrt(x))
	} else {
		return "Unrecognizable"
	}

}
let x = calculate(9, "sqrt", "sqrt")
console.log(x)



