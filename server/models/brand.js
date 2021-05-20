import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Brand = new Schema(
  {
    title: { type: String, require: true },
    country: { type: String, require: true },
    img: { type: String, require: true },
    link: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("brand", Brand);
