const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
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

module.exports = mongoose.model("comments", commentSchema)