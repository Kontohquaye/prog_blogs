import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
      default: "user",
    },
    profilePicture: {
      type: String,
      required: true,
      default: "/avatar.svg",
    },
  },
  {
    timestamps: true,
  }
);
// const User =
//   mongoose.models.User !== undefined
//     ? mongoose.models.User
//     : mongoose.model("User", userSchema);
// console.log(mongoose.models.User);
// export default User;

let User;

try {
  // Check if mongoose.models is defined
  if (mongoose.models && mongoose.models.User) {
    // Use the existing model if it exists
    User = mongoose.models.User;
  } else {
    // Create a new model if it doesn't exist
    User = mongoose.model("User", userSchema);
  }
} catch (error) {
  console.error("Error initializing User model:", error);
}

export default User;
