const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Use the regex pattern for password validation
          return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})[a-zA-Z0-9!@#$%^&*]*$/.test(
            value
          );
        },
        message:
          "Password must have at least one uppercase letter, one number, one special character, and be at least 8 characters long",
      },
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
