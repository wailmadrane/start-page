const express = require('express')
const router = express.Router()

const todoList = [
   {
      id: 1, 
      task: 'Learn React', 
      detail: 'I need to learn react for my groupe project.'
   }
]

// get all todo task
router.get('/', (req, res) => {
   res.status(200).send('get all todo')
})

// add a todo task
router.post('/', (req, res) => {
   res.status(200).send('post a task')
})

// add a todo task
router.put('/:id', (req, res) => {
   res.status(200).send('put a task')
})

// delete task
router.delete('/', (req, res) => {
   res.status(200).send('post a task')
})

module.exports = router