const Download = require('../models/Download');
const downloadCtrl = {};

//get all downloads
downloadCtrl.getDownloads = async (req, res) => {
    const downloads = await Download.find();
    res.json(aplications);
};


//Register a new download
downloadCtrl.createDownload = async(req, res) => {
    const download = new Download(req.body);
    await download.save();
    res.json({
        'status': 'Download Saved'
    });
};

//get download by UserID
downloadCtrl.getDownloadByUser = async (req, res) =>{
    const downloads = await Download.find({idUser: req.params.userId});
    res.json(downloads);
};

//Count downloads by aplication
downloadCtrl.countByApp = async(req, res) =>{
const number = await Download.find({idAplication: req.params.appId}).count();
res.json({'number': number});
};

module.exports = downloadCtrl;