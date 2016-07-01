var http = require('http')

url = 'http://maps.googleapis.com/maps/api/geocode/json?address=New York, NY, U.S.A' 

//url = 'http://maps.googleapis.com/maps/api/geocode/json?address=Mungalatoid'

var p = new Promise((resolve, reject) => {
	console.log("Kicking off an HTTP request")
	// kicks off an asynchronous HTTP request
	http.get(url, (response) => {
		var data = ''
		console.log('HTTP response received')
		response.on('data', (buffer) => {data += buffer})
		response.on('end', () => {
			var twitterObject = JSON.parse(data)
			if (twitterObject.status == 'ZERO_RESULTS') {
				reject(data)
			} else {
				resolve(data) 
			}
		})
		response.on('error', () => {reject('HTTP Error')})
	})
	console.log("HTTP request has been made")
})

console.log("Evaluating Promise")
p.then(
	(resolvedValue) => {console.log("Promise resolved " + resolvedValue)}
).catch(
	(failureReason) => {console.log("Promise rejected " + failureReason)}
)
