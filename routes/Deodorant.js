var express = require('express');
var router = express.Router();

var Deodorant_controlers= require('../controllers/deodorant');
/* GET costumes */
router.get('/', Deodorant_controlers.Deodorant_view_all_Page );
router.get('/detail', Deodorant_controlers.Deodorant_view_one_Page);
/* GET create deodorant page */
router.get('/create', Deodorant_controlers.deodorant_create_Page)
module.exports = router;

