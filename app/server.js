const express = require('express')
const app = express()
const todoRouter = require('./controllers/controller')
const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017/todo', {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})
   .then(() => console.log('Connected to mongodb...'))
   .catch(err => console.error(err))

// route
app.use('/todo', todoRouter)


app.get('/', (req, res) => {
   res.status(200).send('Hello, World!')
})


// listening on port
const port = 3000
app.listen(port, () => {
   console.log(`Listening on port ${port}...`)   
})