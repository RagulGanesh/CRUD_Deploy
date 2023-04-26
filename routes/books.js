const express = require("express");
const router = express.Router();
const Notes = require("../models/Books");
var fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
//Route 1 : get all the notes : GET "/api/books/fetchallnotes".
router.post("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2 : Add new notes using post : Post "/api/notes/addnote".
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("author", "Description must be atleast of 5 characters").isLength(
      {
        min: 5,
      }
    ),
  ],
  async (req, res) => {
    const { title, author} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      alert(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const note = new Notes({
        title,
        author,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//Route 4 : Delete an existing post : DELETE "/api/notes/deletenote".
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }
    //allow deletion only if the user pwns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    return res.json({ Success: "Note has been successfully deleted!"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
