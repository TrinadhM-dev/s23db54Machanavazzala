var express = require('express');
var router = express.Router();

var Deodorant_controlers= require('../controllers/deodorant');

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
    return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET deodorant */
router.get('/', Deodorant_controlers.Deodorant_view_all_Page );
router.get('/detail', Deodorant_controlers.Deodorant_view_one_Page);
/* create create deodorant page */
router.get('/create', Deodorant_controlers.deodorant_create_Page)
/* update create update page */
//router.get('/update',Deodorant_controlers.deodorant_update_Page);
/*  delete costume page */
router.get('/delete', Deodorant_controlers.deodorant_delete_Page);

// /* GET update costume page */
router.get('/update',secured,Deodorant_controlers.deodorant_update_Page);


module.exports = router;

