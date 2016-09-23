opcount = 0

function abs (v) {
	++opcount
	return Math.abs(v)
}

function closestSequence2(a, b) {
	console.log('Best fit for:',a)
	console.log('Within:',b)
	// Finding best fit for a within b
	var bestTotalScore = 0

	// Create initial scoreboard
	var bestIndex  = []
	var bestScore  = []
	var index = []
	var score = []
	// Every position stars packed on left
	for (var i = 0; i < a.length; i++) {
		index[i] = i
		score[i] = abs(a[i]-b[i])
		bestIndex[i] = index[i]
		bestScore[i] = score[i]
	}
	// Dummy node
	index[a.length] = b.length
	score[a.length] = -999
	bestIndex[a.length] = b.length
	bestScore[a.length] = -999

	// Move every digit to its best slot immediately
	for (var digit = a.length-1; digit >= 0; digit--) {
		for (pos = index[digit]+1; pos < index[digit+1]; pos++) {
			newscore = abs(a[digit] - b[pos])
			if (newscore < bestScore[digit]) {
				bestScore[digit] = newscore
				bestIndex[digit] = pos
				score[digit] = newscore
				index[digit] = pos
			}
		}
		bestTotalScore += score[digit]
	}

	console.log('Indexes:',index)
	console.log('Score:',score)
	console.log('BestIndex:',bestIndex)
	console.log('BestScore:',bestScore)
	console.log('Overall:',bestTotalScore)

	// Try every remainding possibile digit configuration
	while(true) {
		var digit = a.length - 1
		while (digit >= 0) {
			if (index[digit] >= b.length - a.length + digit + 1) {
				// no more room, try another digit 
				digit--
			} else {
				// digit moves forward
				index[digit]++
				// all digits to digit's right get reset
				score[digit] = b[index[digit]]
				for (reset=digit+1; reset<a.length; reset++) {
		// OPTIMIZE THIS
					index[reset] = index[reset-1]+1
					score[reset] = b[index[reset]]
				}
			}
		}
		if (digit < 0) {
			// Everything is packed on the right. We are done.
			break
		}

		// Step 2 : Calculate bestscore
		var newScore = 0
		for (var i=0; i < a.length; i++) {
			newScore += score[i]
		}
		if (newScore < bestTotalScore) {
			bestTotalScore = newScore;
		}
		console.log('Indexes:',index)
		console.log('Score:',score)
		console.log('BestIndex:',bestIndex)
		console.log('BestScore:',bestScore)
		console.log('Overall:',bestTotalScore)
	}

	console.log('Opcount:',opcount)
	return bestTotalScore;
}

// console.log(closestSequence2([1, 2, 6], [0, 1, 3, 4, 5]))
// should be 2

console.log(closestSequence2([1, 2, 6], [-99, 0, 99, 1, 45, 3, 77, 4, 88, 5]))
// should be 2

// console.log(closestSequence2([1, 2], [-99, 0, 99, 1, 45, 3, 77, 4, 88, 5]))
// should be 1
