module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
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
      phoneNumber: {
        type: String
      },
      country: {
        type: String
      },
      city: {
        type: String
      },
      birthday: {
        type: String
      },
      address: {
        type: String
      },
      isActive: {
        type: Boolean,
        default: true
      },
      created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    },
      
    });
  
    return mongoose.model('users', userSchema);
  };
  