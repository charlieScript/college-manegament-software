const router = require('express').Router();
const {
  landing,
  generalLogins,
  getError403,
  getError404
} = require('../controllers/HomeController');

// landing page
router.get('/', landing);

router.get('/index', generalLogins)

router.get('/unauthorized', getError403);

// should be in last
// router.use('/', getError404);

module.exports = router