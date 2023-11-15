const { addSportsplan } = require("../../models/sportsplan.model");

async function httpCreateSportsplan(req, res) {
    const sportsplan = req.body;
    try {
        await addSportsplan(sportsplan)
        res.status(201).json(sportsplan)
    } catch (err) {
        res.status(400).json({error: err})
    }
}


module.exports = {
    httpCreateSportsplan
}