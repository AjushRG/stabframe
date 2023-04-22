import mongoose from "mongoose";
import { string } from "zod";

interface Photo extends mongoose.Document {
  title: string;
  description: string;
  media: string;
  createdAt: Date;
  updatedAt: Date;
}

const photoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    media: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
