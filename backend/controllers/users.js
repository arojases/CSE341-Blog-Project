const { userModel } = require("../models")


//Get list
const getItem = async (req, res) => {

    const data = await userModel.find({})
    res.send(data);

};
//Get detail


//Insert 
const createItem = async (req, res) => {


    const { body } = req

    const data = await userModel.create(body)
    //console.log(data);
    res.send(data);

};

//Update


//Delete

module.exports = { getItem, createItem }