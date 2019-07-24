import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
// Import Routes
import taskRoutes from './routes/Tasks'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// Route Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/', taskRoutes)

app.listen(PORT, _ =>  console.log(`Server running on http://localhost:${PORT}/api/tasks`))
