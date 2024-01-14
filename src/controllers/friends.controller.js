const addFriend = (req, res) => {
  res.json({ message: "Add friend" });
};

const removeFriend = (req, res) => {
  res.json({ message: "Remove Friend" });
};

const viewFriendDetails = (req, res) => {
  res.json({ message: "View friend" });
};

module.exports = {
  addFriend,
  removeFriend,
  viewFriendDetails,
};
