var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var deodorant_controller = require('../controllers/deodorant');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Deodorant ROUTES ///
// POST request for creating a Deodorant.
router.post('/deodorant', deodorant_controller.deodorant_create_post);
// DELETE request to delete Deodorant.
router.delete('/deodorant/:id', deodorant_controller.deodorant_delete);
// PUT request to update Deodorant.
router.put('/deodorant/:id', deodorant_controller.deodorant_update_put);
// GET request for one Deodorant.
router.get('/deodorant/:id', deodorant_controller.Deodorant_detail);
// GET request for list of all Deodorant items.
router.get('/deodorant', deodorant_controller.deodorant_list);
module.exports = router;