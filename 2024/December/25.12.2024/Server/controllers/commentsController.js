const Comment = require("../models/Comment.model");

// Get all comments for a joke
const getCommentsByJoke = async (req, res) => {
  try {
    const { jokeId } = req.params;
    const comments = await Comment.find({ joke: jokeId }).populate("author", "fName lName");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new comment
const addComment = async (req, res) => {
  try {
    const { content, jokeId } = req.body;

    // Ensure the user is logged in
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const comment = await Comment.create({
      content,
      author: req.user._id,
      joke: jokeId,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCommentsByJoke,
  addComment,
};
