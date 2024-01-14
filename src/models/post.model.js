const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: Number,
    },
    comments: {
      type: [
        {
          title: String,
          description: String,
          likes: Number,
          owner: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
