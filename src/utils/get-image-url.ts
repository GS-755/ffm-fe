const getImageUri = (imgName: string): string => {
  return import.meta.env.VITE_IMG_PATH + imgName;
}

export default getImageUri;