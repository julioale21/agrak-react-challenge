/* eslint-disable no-console */
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function uploadFile(file: File): Promise<string | undefined> {
  try {
    const storageRef = ref(storage, `/files/${file.name}`);
    const response = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(response.ref);

    return url;
  } catch (e) {
    console.error("Error adding document: ", e);

    return "";
  }
}

export { uploadFile };
