const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);
router.post('/message', indexController.message);
router.post('/lang', indexController.langChange);

module.exports = router;
