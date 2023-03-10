const { commentmodel } = require("../models")


//Get list
const getItem = async (req, res) => {

   const data = await commentmodel.find({})
   res.send(data);

};

//Insert 
const createItem = async (req, res) => {


   const { body } = req

   const data = await commentmodel.create(body)
   //console.log(data);
   res.send(data);

};

module.exports = { getItem, createItem };