#!/usr/bin/env node
import * as _ from "lodash";

function ducci(sequence: number[]): number[] {
	var res = [];

	for(var i = 0; i < sequence.length; i++) {
		res.push(
			Math.abs( sequence[i] - sequence[(i + 1) % sequence.length] )
		);
	}

	return res;
}

var numbers = [];

_.forEach(process.argv.slice(2), (n: string) => {
	if(!_.isNumber(+n)) {
		console.error("Invalid input, series of numbers required, eg. 3 5 6");
		process.exit(1);
	}

	numbers.push(+n);
})

if(_.isEmpty(numbers)) {
		console.error("No input, series of numbers required, eg. 3 5 6");
		process.exit(1);
}

while(_.find(numbers, (i: number): boolean => i !== 0)) {
	numbers = ducci(numbers);
	console.log(numbers);
}