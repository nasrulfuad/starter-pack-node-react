import express from 'express'
import Task from '../models/TaskModel'
import { userLoginValidation } from '../stuff/validation'

const router = express.Router()

// Get all tasks
router.get('/tasks', async (req, res) => {	

	try {
		const tasks = await Task.findAll()		
		if(!tasks) return res.status(400).send('Not Found')
		res.json(tasks)
	} catch(error) {
		res.status(400).send(error)
	}

})

// Add new task
router.post('/task', (req, res) => {

	if(!req.body.name) return res.status(400).json({ error: 'Bad Data!' })

	Task.create(req.body).then(_=> res.send('Task Added!')).catch(err => res.send(`Error ${err}`))

})

// Delete task
router.delete('/task/:id', (req, res) => {
	Task.destroy({ where: { id: req.params.id } })
		.then(_=> res.send('Task Was Deleted!'))
		.catch(err => res.send(`Error ${err}`))
})

// Update task
router.put('/task/:id', async (req, res) => {
	if(!req.body.name) return res.status(400).send({ error: 'Bad Data!'})

	if(!req.params.id) return res.status(400).send('Id was not found!')

	// Check if data is exist
	const get = await Task.findAll({ attributes: ['name'], where: { id: req.params.id } })

	if(get.length < 1) return res.status(400).json({ error: 'Data that wants to update does not exist' })

	try {
		const update = await Task.update(
			{ name: req.body.name },
			{ where: { id: req.params.id } }
		)
		if(update) return res.send('Task Updated')
		res.status(400).send('Something went wrong!')

	} catch(err) {
		res.send(err)
	}

})

export default router
