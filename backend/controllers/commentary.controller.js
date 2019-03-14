const Commentary = require('../models/Commentary');

const commentaryCtrl = {};

//get all comments
commentaryCtrl.getComments = async (req, res) =>{
    const comments = await Commentary.find()
    res.json(comments);
};

//Create a new comment
commentaryCtrl.createComment = async(req, res) => {
    const comment = new Commentary(req.body);
    await comment.save();
    res.json({
        'status': 'Comment Saved'
    });
};

//Get comments by App
commentaryCtrl.getCommentsByApp = async(req, res) =>{
    const comments = await Commentary.find({appId: req.params.appId, status: "permitido"});
    res.json(comments);
};

//Get comments by User
commentaryCtrl.getCommentsByUser = async(req, res) =>{
    const comments = await Commentary.find({userId: req.params.userId});
    res.json(comments);
};

//Edit a commentary
commentaryCtrl.editComment = async (req, res) =>{
    const { id } = req.params;
    const comment ={
        date: req.body.date,
        body: req.body.body,
        appId: req.body.appId,
        userId: req.body.userId,
        userName: req.body.userName,
        imgPath: req.body.imgPath,
        response: req.body.response
    };
    await Commentary.findByIdAndUpdate(id, {$set: comment}, {new: false});
    res.json({status: 'Comment Updated'}); 
};

//add a Response to a Comment
commentaryCtrl.addReply = async (req, res) =>{
    const{ id } = req.params;
    const reply ={
        body: req.body.body,
        userId: req.body.userId,
        userName: req.body.userName,
        imgPath: req.body.imgPath
    };
    await Commentary.findByIdAndUpdate(id, {$push:{response: reply}});
    res.json({status: 'Reply added'});
}

//ban a Commentary
commentaryCtrl.banComment = async (req, res) =>{
    const { id } = req.params;
    // await Commentary.findByIdAndUpdate({_id: ObjectId(id)}, {$set: {status: 'bloqueado'}});
    await Commentary.findByIdAndUpdate(id, {$set:{status: 'bloqueado'}});
    res.json({status: 'Comentario bloqueado'});
}

commentaryCtrl.allowComment = async (req, res) =>{
    const { id } = req.params;
    await Commentary.findByIdAndUpdate(id, {$set:{status: 'permitido'}});
    res.json({status: 'Comentario permitido'}); 
}
module.exports = commentaryCtrl;



