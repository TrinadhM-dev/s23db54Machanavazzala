var express = require('express');
var router = express.Router();

const Deodorant_controlers= require('../controllers/deodorant');
/* GET costumes */
router.get('/', Deodorant_controlers.Deodorant_view_all_Page );
module.exports = router;

