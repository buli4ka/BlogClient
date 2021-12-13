export const getFormDataImages = (images = [])=>{
  let fd = new FormData();
  let result = [];

  for (let i in images) {
    fd = new FormData();
    fd.append('File', images[i]);
    result.push(fd);
  }

  return result;
};

export const getFormDataIcon = (image)=>{
  let fd = new FormData();

  fd.append('File', image);

  return fd;
};

export const getPreview = (image)=>{
  const reader = new FileReader();

  return reader.readAsDataURL(image);
};
