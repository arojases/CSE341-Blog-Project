module.exports = (mongoose) => {
    const userSchema = new mongoose.Schema({
        username: {
            type: String
        },
        password: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        birthday: {
            type: String
        },
        phone: {
            type: Number
        },
        address: {
            type: String
        },
        created_at: {
            type: Date,
            default: Date.now(),
        },
});  

return mongoose.model("users", userSchema)
};  
