const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        fullname: {
            type: String,
            required: true
        },

        photoString: String,

        postImage: String,

        phoneNumber: {
            type: Number,
            required: true
        }
    }
)

const Post = mongoose.model("Posts", postSchema)

module.exports = Post;