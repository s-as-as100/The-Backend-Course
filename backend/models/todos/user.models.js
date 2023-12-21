import moongoose from "mongoose";

const userSchema = new moongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      //   required: [true, "password is required"],
      required: true,
    },
  },
  { timestamps: true }
);

// you can use multiple in files
export const User = moongoose.model("User", userSchema);
