import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    dafault: moment().format("DD.MON.YYYY hh:mm"),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  creatorName: {
    type: String,
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
