const addPost = async (req, res) => {
  res.json({ message: "add post controller reached" });
};

const deletePost = async (req, res) => {
  res.json({ message: "delete post" });
};

const likePost = (req, res) => {
  res.json({ message: "Like post" });
};

const unlikePost = (req, res) => {
  res.json({ message: "unlike post" });
};

module.exports = {
  addPost,
  deletePost,
  likePost,
};
