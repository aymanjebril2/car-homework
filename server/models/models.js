import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Models = new Schema(
  {
    name: { type: String, require: true },
    type: { type: String, require: true },
    picturelink: { type: String, require: true },
    brand_id: { type: Schema.Types.ObjectId, ref: "brand" },
  },
  { timestamps: true }
);

export default mongoose.model("models", Models);
