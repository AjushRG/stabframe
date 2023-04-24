import { Schema, model } from "mongoose";

// Create Stab Schema
const stabSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.stabId = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Create Stab Model
const Stab = model("Stab", stabSchema);

// Export Stab Model
export default Stab;
