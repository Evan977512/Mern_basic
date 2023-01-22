import mongoose from "mongoose";

// Create Schema
const CategorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    dafaulf: "undefined",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const Category = mongoose.Schema("category", CategorySchema);

export default Category;
