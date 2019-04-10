const Rating = require('../models/Rating');
const ratingCtrl = {};

//create a rating value
ratingCtrl.createRating = async ( req, res ) => {
    const newRating = new Rating(req.body);
    await newRating.save();
    res.json({
        'status':'New Rating saved'
    });
};

//get avgvalue
ratingCtrl.getAverage = async (req, res) =>{
    // const avg = Rating.aggregate([{$match: {appId: req.params.appId}} ,{$group: {_id:null, average: {$avg:"$value"} } }]);
    const avg = await Rating.aggregate([{$match: {appId: req.params.appId}},{$group: {_id:null, average: {$avg: '$value'} } }]);
    res.json(avg[0]);
}

module.exports = ratingCtrl;