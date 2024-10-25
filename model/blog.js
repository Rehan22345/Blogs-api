const mongoose =  require('mongoose');
const { v4: uuidv4 } = require('uuid');
const schema = mongoose.Schema({
    blog_id: {
        type: String,
        default: uuidv4,  // UUID can be stored as a string
    },
    user_id: {
        type: String, // UUID can be stored as a string
        default: uuidv4,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    slug: {
        type: String,
    },
    meta_description: {
        type: String,
    },
    keywords: {
        type: String,
    },
    status: {
        type: String,
    },
    isPublished: {
        type: Boolean,
    },
    otp_code : {
        type : Number,
    },
    otp_expiry : {
        type : Date,
    }
});

module.exports = mongoose.model("Blogs", schema);
