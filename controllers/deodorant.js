
var Deodorant = require('../models/deodorants');

// List of all Costumes
exports.deodorant_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Deodorant list');
};
// for a specific Costume.
exports.Deodorant_detail = function(req, res) {
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
// for a specific Costume.
exports.Deodorant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Deodorant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Costume update form on PUT.
exports.deodorant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Deodorant.findById( req.params.id)
    // Do updates of properties
    if(req.body.D_Name) toUpdate.D_Name = req.body.D_Name;
    if(req.body.D_Type) toUpdate.D_Type = req.body.D_Type;
    if(req.body.D_Cost) toUpdate.D_Cost = req.body.D_Cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    // Handle Costume delete on DELETE.
exports.deodorant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Deodorant.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    //Handle a show one view with id specified by query
    exports.deodorant_view_one_Page = async function(req,res) {
        console.log("single view for id" +req.query.id)
            try{
                result = await Deodorant.findById(req.query.id)
                res.render('deodorant',{
                    title:'Deodorant Detail',toShow:result
                });
            }
            catch(err){
                res.status(500)
                res.send(`{'error:${err}'}`)
            }
    }
    