import { v2 as cloudinary } from "cloudinary";
import config from "../config/config";

cloudinary.config({
  cloud_name: config.cloudinary.CLOUDINARY_NAME,
  api_key: config.cloudinary.CLOUDINARY_API_KEY,
  api_secret: config.cloudinary.CLOUDINARY_SECRET,
});

export async function uploadImage(filePath: string) {
  return await cloudinary.uploader.upload(filePath, { folder: "jusanchis" });
}

export async function deleteImage(publicId: any) {
  return await cloudinary.uploader.destroy(publicId);
}

export default cloudinary;
