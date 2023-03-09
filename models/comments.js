const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String
    },
    comment: {
        type: String
    },
    email: {
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

module.exports = mongoose.model("comments", CommentSchema)