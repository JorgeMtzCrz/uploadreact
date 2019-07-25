const { Router } = require('express')
const router = Router()
const { newPost } = require('../controllers/postController')

router.post('/new', newPost)

module.exports = router