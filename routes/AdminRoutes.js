const { getLogin, postLogin } = require('../controllers/AdminController');

const router = require('express').Router()

// admin login
// @GET LOgin
router.get('/login', getLogin)

// @POST LOGIN
router.post('/login', postLogin)

module.exports = router