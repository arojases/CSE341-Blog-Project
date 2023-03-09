const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
    }
}, 
{
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false 
})

module.exports = mongoose.model("category", CategorySchema)