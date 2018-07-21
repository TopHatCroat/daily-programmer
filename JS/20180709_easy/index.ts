#!/usr/bin/env node
import * as _ from "lodash";

function upIt(a: number, b: number, count: number): number {
	if(count === 1) {
		return a ** b;
	}

	var res = a;
	for (var i = 1; i < b; i++) {
		res = upIt(a, res, count - 1);
	}

	return res;
}

var first = process.argv[2];
var operand = process.argv[3];
var second = process.argv[4];

if(_.isEmpty(first) || _.isEmpty(operand) || _.isEmpty(second)) {
	console.error("Second number input invalid, example: 2 ↑ 4")
	process.exit(1);
}

if(!_.isNumber(+first)) {
	console.error("First number input invalid, example: 2 ↑ 4")
	process.exit(1);
}

if(!_.isNumber(+second)) {
	console.error("Second number input invalid, example: 2 ↑ 4")
	process.exit(1);
}

_.forEach(operand, (s: string) => {
	if(s !== "↑") { // yay, unicode!
		console.error("Operand invalid input, example: 2 ↑ 4")
		process.exit(1);
	}
})

console.log(upIt(+first, +second, operand.length));