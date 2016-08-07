/*
 * medalOTM = Medal Object-Text Mapping
 * 
 * Input file = manyMedals.txt. Tab and Newline separated
 */

import fs from 'fs'

var medalJson = fs.readFileSync('manyMedals.txt','utf8')
	.trim() // returns text with extra whitespace removed
	.split('\n') // returns an array
	.map(line => line.split('\t')) // becomes array of arrays
	.reduce((countries, line) => {
		countries[line[0]] = countries[line[0]] || []
		countries[line[0]].push({
			sport: line[1],
			medal: line[2]
		})
		return countries
	}, {}) // reduces to a single object

console.log('medalJson', medalJson)
