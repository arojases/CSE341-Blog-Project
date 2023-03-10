const { categorymodel } = require("../models")


//Get list
const getAllCategory = async (req, res) => {

   const data = await categorymodel.find({})
   res.send(data);

};

//Insert 
const createCategory = async (req, res) => {


   const { body } = req

   const data = await categorymodel.create(body)
   //console.log(data);
   res.send(data);

};

module.exports = { getAllCategory, createCategory };