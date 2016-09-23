function closestSequence(a, b) {
	//console.log ('Sequence Lengths: ',a.length,b.length)
	if (b.length > a.length) {
		return closestSequence(b,a)
	}
	// a is the larger array

	let smallestScore = Infinity
	for (let b0pos=0; b0pos <= a.length-b.length; b0pos++) {
		//console.log('Checking b[ 0 ] at a[',b0pos,']')
		let absDiff = Math.abs(a[b0pos] - b[0])
		if (b.length > 1) {
			absDiff += closestSequence(a.slice(b0pos+1,a.length),
				b.slice(1,b.length))
		}
		if (absDiff < smallestScore) {
			smallestScore = absDiff
		}
	}
	return smallestScore
}

console.log(closestSequence([1, 2, 6], [0, 1, 3, 4, 5]))
// should be 2
