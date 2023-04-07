var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('Deodorant', { title: 'Search Results Deodorant' });
});

module.exports = router;
