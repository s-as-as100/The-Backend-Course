import moongoose from "mongoose";
const todoSchema = new moongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: moongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array of subtodos
  },
  { timestamps: true }
);
export const Todo = moongoose.model("Todo", todoSchema);
