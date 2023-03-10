const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    status: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    categories:Object,
    users:Object

})

module.exports = mongoose.model("posts", postSchema)