import { defineMongooseModel } from "#nuxt/mongoose";
import { Types } from "mongoose";
import type { Todo } from "~/types";

export const TodoSchema = defineMongooseModel<Todo>({
  name: "Todo",
  schema: {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Number,
      required: true,
    },
  },
  options: {
    timestamps: true,
  },
});
