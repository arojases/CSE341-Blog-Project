const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const dbConnect = () => {

    URI = process.env.URI;
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true        
    })
    .then(() => {
        console.log("***** Successful Connection *****")  
    })
    .catch(err => {
        console.log("***** Connection Error ***** " + err)
    })

    
};

module.exports = dbConnect;