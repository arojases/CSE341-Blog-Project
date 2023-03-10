const { postmodel } = require("../models")


//Get list
const getAllPost = async (req, res) => {

   const data = await postmodel.find({})
   res.send(data);

};

//Insert 
const createPost = async (req, res) => {


   const { body } = req

   const data = await postmodel.create(body)
   //console.log(data);
   res.send(data);

};

module.exports = { getAllPost, createPost };