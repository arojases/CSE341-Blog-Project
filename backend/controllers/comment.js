const { commentmodel } = require("../models")


//Get list
const getAllComment = async (req, res) => {

   const data = await commentmodel.find({})
   res.send(data);

};

//Insert 
const createComment = async (req, res) => {


   const { body } = req

   const data = await commentmodel.create(body)
   //console.log(data);
   res.send(data);

};

module.exports = { getAllComment, createComment };