(async() => {
	const query = '{helloWorld}'

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/JSON'
		},
		body: JSON.stringify({ query } ),
	}

	const createHelloWorld = string => {
		const body = document.querySelector('body')
		body.innerHTML = string
	}
	
	const result = await fetch('http://localhost:4000/graphql', options)
	const {data: {helloWorld}} = await result.json()
	createHelloWorld(helloWorld)
})()
