// Import the Cloudinary SDK and rename the v2 module to cloudinary
import { v2 as cloudinary } from "cloudinary";

// Import the dotenv library to load environment variables from a .env file
import dotenv from "dotenv";

// Import a custom logger utility module
import logger from "../utils/logger.js";

// Load environment variables from a .env file in the project root directory
dotenv.config();

// Configure the Cloudinary SDK with the API credentials from the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define a function for uploading media files to Cloudinary
export const uploadMedia = async (mediaFile, name) => {
  try {
    // Check if a media file was provided
    if (!mediaFile) {
      throw new Error(`Media is required hahaha`);
    }

    // Upload the media file to Cloudinary with a public ID
    const uploadedMedia = await cloudinary.uploader.upload(mediaFile, {
      public_id: `${name}`,
    });

    // Generate a URL for the uploaded media with the fill crop mode
    const url = cloudinary.url(`${name}`, {
      crop: "fill",
    });

    // Return an object containing the uploaded media data and URLs
    const resMedia = {
      data: uploadedMedia,
      url: url,
      secureUrl: uploadedMedia.secure_url,
    };
    return resMedia;
  } catch (error) {
    // Log any errors and re-throw the error to the caller
    logger.error(error);
    throw error;
  }
};

// Define a function for deleting an image from Cloudinary (commented out for now)
// export const deleteImage = async (publicId) => {
//   try {
//     const deletedImage = await cloudinary.uploader.destroy(publicId);
//     return deletedImage;
//   } catch (error) {
//     logger.error(error);
//     throw error;
//   }
// };
