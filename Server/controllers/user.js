const bcryptjs = require("bcryptjs");
const userRouter = require("express").Router();
const userSchema = require("../schema/user");

userRouter.post("/", async (request, response, next) => {
  const body = request.body;
  if (!body.password || body.password.length < 3) {
    // check password by regexp
    return response.status(400).json({ error: "unvalid password" });
  }
  // username and name check in the schema  ./schema/user.js
  saltRounds = 10;
  const passwordHash = await bcryptjs.hash(body.password, saltRounds);

  const user = new userSchema({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (exception) {
    next(exception); // read about it
  }
});

userRouter.get("/", async (request, response) => {
  const users = await userSchema.find({}); //.populate('notes')
  response.json(users);
});

module.exports = userRouter;
