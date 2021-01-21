var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController')


/* GET home page. endPoint /api  */
router.get('/api', indexController.get_data);

router.post ('/api/add', indexController.add_to_phoneBook)

router.get('/api/delete/:id', indexController.delete_phoneBook)

router.get('/api/update/:id', indexController.show_update_form)

router.post ('/api/update/:id', indexController.update_phoneBook)

module.exports = router;
