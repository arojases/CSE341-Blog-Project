const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    comment: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    posts:Object,
    users:Object

})

module.exports = mongoose.model("comments", CommentSchema)