const loginRouter = require("express").Router();
const userSchema = require("../schema/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

loginRouter.post("/", async (request, response) => {
  const user = await userSchema.findOne({ username: request.body.username });
  const passwordCorrect =
    user === null
      ? false
      : await bcryptjs.compare(request.body.password, user.passwordHash);
  // how passwordhash returns
  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: "invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, config.SECRET);

  let userwithshared = await user.populate("sharedNotes");

  response.status(200).send({
    token,
    username: user.username,
    name: user.name,
    id: user._id,
    sharedNotes: userwithshared,
  });
});

module.exports = loginRouter;
