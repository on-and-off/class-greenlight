import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  classes: {
    type: Map,
    of: String,
  },
});

const User = mongoose.Model("User", UserSchema);

export default User;
