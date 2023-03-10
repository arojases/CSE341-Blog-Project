const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
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

module.exports = mongoose.model("posts", PostSchema)