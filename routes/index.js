var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController')


/* GET home page. endPoint /api  */
router.get('/api', indexController.get_data);

router.post ('/', indexController.add_to_phoneBook)

module.exports = router;
