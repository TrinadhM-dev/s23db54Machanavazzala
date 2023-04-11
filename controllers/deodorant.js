
var Deodorant = require('../models/deodorants');

// List of all Costumes
exports.deodorant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Deodorant list');
};
// for a specific Costume.
exports.deodorant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Deodorant detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.deodorant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Deodorant create POST');
};
// Handle Costume delete form on DELETE.
exports.deodorant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Deodorant delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.deodorant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Deodorant update PUT' + req.params.id);
};
// List of all Costumes
exports.deodorant_list = async function(req, res) {
try{
theD = await Deodorant.find();
res.send(theD);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.Deodorant_view_all_Page = async function(req, res) {
try{
theDeodorant = await Deodorant.find();
res.render('deodorant', { title: 'Deodorant Search Results', results: theDeodorant });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}

//POST
// Handle Costume create on POST.
exports.deodorant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Deodorant();
    document.D_Name = req.body.D_Name;
    document.D_Type = req.body.D_Type;
    document.D_Cost = req.body.D_Cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }