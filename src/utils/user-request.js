export const getUpdateData = (user) =>{
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    biography: user.biography,
    isPrivate: user.isPrivate,
    username: user.username,
    email: user.email,
  };

};
