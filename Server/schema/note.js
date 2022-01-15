const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: [true, 0],
  },
  sharedWith: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  //comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}]
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Notes", noteSchema);
