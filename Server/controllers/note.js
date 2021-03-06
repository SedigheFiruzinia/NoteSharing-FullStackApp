const noteRouter = require("express").Router();
const noteSchema = require("../schema/note");
const userSchema = require("../schema/user");
const mongoose = require("mongoose");

noteRouter.get("/:id", async (request, response) => {
  const populated = await noteSchema.find({}).populate("owner");

  const notesByOwner = populated.filter(
    (note) => note.owner._id.toString() === request.params.id
  );
  response.json(notesByOwner);
});

// noteRouter.get("/:id", async (request, response) => {
//   console.log(request.body);
//   const populated = await noteSchema.find({}).populate("owner");

//   const notesByOwner = populated.filter(
//     (note) =>
//       note.owner._id.toString() === request.params.id &&
//       request.body.sharedNotes.map((n) => n === note._id)
//   );
//   response.json(notesByOwner);
// });

noteRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const owner = request.owner;
  const note = new noteSchema({
    owner: owner,
    text: body.text,
    likes: body.likes || 0,
    shareWith: body.shareWith,
    updatedAt: body.updatedAt,
  });
  try {
    const savedNote = await note.save();
    await userSchema.findByIdAndUpdate(
      owner._id,
      { notes: owner.notes.concat(savedNote._id) },
      { new: true }
    );
    response.status(201).json(savedNote);
  } catch (exception) {
    next(exception);
  }
});

//sharing the note
noteRouter.post("/:id", async (request, response, next) => {
  const userToShare = request.body;
  try {
    const note = await (
      await noteSchema.findById(request.params.id)
    ).populate("owner");
    console.log("here mhbhijiiii: ", note);

    const user = await userSchema.findById(userToShare.id);
    console.log("user", user);

    await noteSchema.findByIdAndUpdate(
      note._id,
      { sharedWith: note.sharedWith.concat(user._id) },
      { new: true }
    );

    await userSchema.findByIdAndUpdate(user._id, {
      sharedNotes: user.sharedNotes.concat(note),
    });

    response.status(201).json(note);
  } catch (exception) {
    next(exception);
  }
});

// noteRouter.delete('/:id', async (request, response,next) => {
//     const user = request.user
//     console.log(user)
//     try {
//         const blogToDelete = await Blog.findById(request.params.id)
//         if (blogToDelete.user._id.toString() === user.id.toString()) {
//             await Blog.findByIdAndRemove(request.params.id)
//             response.status(204).end()
//         }
//         //
//     } catch (exception) {
//         next(exception)
//     }
// })

//update note
noteRouter.put("/:id", async (request, response, next) => {
  try {
    const saved = await noteSchema.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(201).json(saved);
  } catch (exception) {
    next(exception);
  }
});

module.exports = noteRouter;
