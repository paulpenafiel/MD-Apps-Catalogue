const Aplication = require('../models/Aplication');
const aplicationCtrl = {};

//get all aplications
aplicationCtrl.getAll= async(req, res) =>{
    const aplications = await Aplication.find();
    res.json(aplications);
}
//get all active aplications
aplicationCtrl.getAplications = async(req, res) => {
    const aplications = await Aplication.find({status: "activo"});
    res.json(aplications);
};

//create a new aplication
aplicationCtrl.createAplication = async(req, res) => {
    const aplication = new Aplication(req.body);
    await aplication.save();
    res.json({
        'status': 'Aplication Saved'
    });
};

//get aplication by ID
aplicationCtrl.getAplication = async (req, res) =>{     
    const aplication = await Aplication.findById(req.params.id);
    res.json(aplication);
};

//get aplications by category
aplicationCtrl.getAplicationByCat = async(req, res) =>{   
    const aplications = await Aplication.find({category: {'$regex': req.params.cat, '$options': 'i'}});
    res.json(aplications); 
}

//edit an aplication
aplicationCtrl.editAplication = async (req, res) =>{
    const { id } = req.params;
    const aplication= req.body;
    await Aplication.findByIdAndUpdate(id, {$set: aplication}, {new:true});
    res.json({status: 'Aplication Updated'});
};

//delete an aplication
aplicationCtrl.deleteAplication = async (req, res) =>{
    const { id } = req.params;
    await Aplication.findByIdAndRemove(id);
    res.json({status: 'Aplication Removed'});
};

module.exports = aplicationCtrl;