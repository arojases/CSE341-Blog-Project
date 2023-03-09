const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String
    },
    brief: {
        type: String
    },
    content: {
        type: String
    },
    status: {
        type: String
    }
}, 
{
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false 
})

module.exports = mongoose.model("posts", PostSchema)