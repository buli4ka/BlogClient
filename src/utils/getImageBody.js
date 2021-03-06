import axios from 'axios';

export const uploadImages = async ( images, id, accessToken )=>{
  let fd = new FormData();

  for (let i = 0; i < images.length; i++) {
    fd = new FormData();
    fd.append('File', images[i]);
    await axios.post(
      process.env.REACT_APP_API_BASE_URL + 'image/addPostImage/' + id
      , fd, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

  }
};

export const uploadIcon = async ( icon, id, accessToken )=>{
  let fd = new FormData();

  fd.append('File', icon);
  await axios.post(
    process.env.REACT_APP_API_BASE_URL + 'icon/AddOrUpdateUserIcon/' + id
    , fd,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );


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
