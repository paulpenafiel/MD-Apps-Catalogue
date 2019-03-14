const Category = require('../models/Category');
const categoryCtrl = {};

//create a new category
categoryCtrl.createCategory = async(req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.json({
        'status': 'category Saved'
    });
};

//get category by name
categoryCtrl.getCategory = async(req, res) =>{
    const category = await Category.find({name:  {'$regex': req.params.name, '$options': 'i'}});
    res.json(category);
};

module.exports = categoryCtrl;