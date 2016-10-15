var margin = ''

function permute(list, action) {
	function swap(n,m) {
		margin += '   '
		//console.log(margin + 'swap ' + n + ' ' + m + (m==n ? ' (NOP)' : ''))
		tmp = list[n]
		list[n] = list[m]
		list[m] = tmp
		margin = margin.replace(/   $/,'')
	}

	function generate(n) {
		margin += '   '
		//console.log(margin + 'generate ' + n)
		if (n==1) action(list)
		else {
			for (var i=0; i<n; i++) {
				generate(n-1)
				//console.log(margin + 'i = ' + i)
				swap(n%2 ? 0 : i, n-1)
			}
		}
		margin = margin.replace(/   $/,'')
	}
	generate(list.length)
}

permute(['A','B','C','D','E'], function(list){console.log(list)})
