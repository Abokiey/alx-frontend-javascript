import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const resolveUpload = await uploadPhoto();
    const resolveCreate = await createUser();

    return {
      photo: resolveUpload,
      user: resolveCreate,
    };
  } catch (err) {
    return {
      photo: 'null',
      user: 'null',
    };
  }
}
