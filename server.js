const express = require('express')
const app = express()
const PORT = 5000

app.get('/api/users', (req, res) =>
	res.json([
		{ id: 1, name: 'Nasrul Fuad', age: 19 },
		{ id: 2, name: 'Max Payne', age: 20 },
		{ id: 3, name: 'John Doe', age: 22 },
		{ id: 4, name: 'Sample One', age: 23 },
	])
)

app.listen(PORT, _ =>  console.log(`Server running on http://localhost:${PORT}/api/users `))
