import { Request, Response, NextFunction } from "express";

import photoService from "../services/photo.service";
import log from "../utils/logger";
import Photo from "../models/photos.model";

const stabPhoto = (req: Request, res: Response, next: NextFunction) => {
  const photo = req.body;

  try {
    const createdPhoto = photoService.createPhoto(photo);
    res.status(201).json({
      message: "Photo created successfully",
      createdPhoto,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
    log.error(error);
  }
};

const getPhotos = (req: Request, res: Response, next: NextFunction) => {
  try {
    const photos = photoService.getPhotos();
    res.status(200).json({
      message: "Photos fetched successfully",
      photos,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
    log.error(error);
  }
};

const getPhoto = (req: Request, res: Response, next: NextFunction) => {};

const updatePhoto = (req: Request, res: Response, next: NextFunction) => {};

const deletePhoto = (req: Request, res: Response, next: NextFunction) => {};

export default {
  stabPhoto,
  getPhotos,
  getPhoto,
  updatePhoto,
  deletePhoto,
};
