const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({

    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("category", CategorySchema)