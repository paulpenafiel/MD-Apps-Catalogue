const New = require('../models/New');
const newCtrl = {};

//get all news 
newCtrl.getNews = async (req, res) => {
    const news = await New.find();
    res.json(news);
};

//register a new 
newCtrl.createNew = async(req, res ) => {
    const newPost = new New(req.body);
    await newPost.save();
    res.json({
        'status': 'New Post saved'
    });
};

//Get last 10 Posts
newCtrl.getLastNews = async(req, res) => {
    const news = await New.find().sort({"date": -1}).limit(5);
    res.json(news);
}

newCtrl.deletePost = async (req, res) =>{
    const { id } = req.params;
    await New.findByIdAndRemove(id);
    res.json({status: 'Post Removed'});
};

module.exports = newCtrl;