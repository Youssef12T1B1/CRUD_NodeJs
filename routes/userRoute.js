const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')



router.post('/api/users', userController.create_user)
router.put('/api/users/:id', userController.update_user)
router.get('/api/users', userController.find)
router.delete('/api/users/:id', userController.delete_user)

module.exports = router