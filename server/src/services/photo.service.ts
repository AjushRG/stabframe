import Photo from "../models/photos.model";
import photoRepo from "../repositories/photo.repository";

const createPhoto = async (photo: Photo): Promise<Photo> => {
  const newPhoto = new Photo(photo);

  const createdPhoto = await photoRepo.postPhoto(photo);
  return createdPhoto;
};

const getPhotos = () => {
  return photoRepo.getPhotos();
};

export default {
  createPhoto,
  getPhotos,
};
