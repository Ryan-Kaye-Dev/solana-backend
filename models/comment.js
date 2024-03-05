const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: [{ type: Schema.Types.ObjectId, ref: "User" }],
    likes: { type: Number },
    dateAndTime: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true } }
);

// Define a virtual for formatted date and time
messageSchema.virtual("formattedDateTime").get(function () {
  const options = { hour: "2-digit", minute: "2-digit" };
  return `${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString([], options)}`;
});

module.exports = mongoose.model("Comment", commentSchema);
