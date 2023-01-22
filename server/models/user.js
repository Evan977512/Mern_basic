import mongoose from "mongoose";
import moment from "moment";

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "SubAdmin", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    dafault: moment().format("DD.MM.YYYY hh:mm"),
  },
  comments: [
    {
      /**
       * 왜 post_id까지 설정해놓는것인가?
       * post를 지우면 그 post에 관련된
       * comments까지 싹 다 지우기 편하기 위해서
       */
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

export default User;
