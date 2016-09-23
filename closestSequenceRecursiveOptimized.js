function closestSequence2(a, b) {
	//console.log(a,b)
	// global
	bestscore = Infinity
	if (b.length > a.length) {
		closestSequenceOptimized(0,b,a)
	} else {
		closestSequenceOptimized(0,a,b)
	}
	return bestscore
}

function closestSequenceOptimized(score, a, b) {
	console.log ('Score:',score,'Sequences:',a,b)
	for (var b0pos=0; b0pos <= a.length-b.length; b0pos++) {
		//console.log('Checking b[ 0 ] at a[',b0pos,']')
		var absDiff = Math.abs(a[b0pos] - b[0])
		if (b.length > 1) {
			if (absDiff+score < bestscore) {
				absDiff += closestSequenceOptimized
				(absDiff+score, a.slice(b0pos+1,a.length),
				b.slice(1,b.length))
			}
		} else {
			if (absDiff+score < bestscore) {
				bestscore = absDiff+score
				console.log('bestscore:',bestscore)
			}
		}
	}
}

// console.log(closestSequence2([1, 2, 6], [0, 1, 3, 4, 5]))
// should be 2

//console.log(closestSequence2([1, 2, 6], [-99, 0, 99, 1, 45, 3, 77, 4, 88, 5]))
// should be 2

console.log(closestSequence2([1, 2], [-99, 0, 99, 1, 45, 3, 77, 4, 88, 5]))
// should be 1
