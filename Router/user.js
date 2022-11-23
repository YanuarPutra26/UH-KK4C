const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

router.get('/user', usercontroller.index)

router.get('/user/:id', usercontroller.show)

  router.post('/users', usercontroller.store)

  router.put('/user/:id', usercontroller.update)
  
  router.delete('/user/:id', usercontroller.delete)

  module.exports = router