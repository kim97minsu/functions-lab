let calculate = (x, y, operation) => {
	if(operation === "add") {
		return (x + y)
	} else if(operation === "subtract") {
		return (x - y)
	} else if(operation === "multiply") {
		return (x * y)
	} else if(operation === "divide") {
		return (x / y)
	} else {
		return "Unrecognizable"
	}
}
let x = calculate(6, 3, "multiply")
console.log(x)
