import Photo from "../models/photos.model";

const postPhoto = async (photo: Photo) => {
  const createdPhoto = (await photo.save()) as Photo;
  return createdPhoto as Photo;
};

const getPhotos = async () => {
  const photos = (await Photo.find()) as Photo[];
  return photos;
};

const getPhoto = async (id: string) => {
  const photo = (await Photo.findById(id)) as Photo;
  return photo;
};

export default {
  postPhoto,
  getPhotos,
  getPhoto,
};
