const PASSWORD_REG_EXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const EMAIL_REG_EXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const USERNAME_REG_EXP = /^[A-Za-z0-9_\-\.]{1,20}/;
const BIOGRAPHY_REG_EXP = /^[A-Za-z0-9_\-\.]{1,50}/;
const NAME_REG_EXP = /^[a-zA-Z\-]+$/;


export const isPassword = value => PASSWORD_REG_EXP.test(value);
export const isEmail = value => EMAIL_REG_EXP.test(value);
export const isUsername = value => USERNAME_REG_EXP.test(value);
export const isName = value => NAME_REG_EXP.test(value);
export const isBiography = value => BIOGRAPHY_REG_EXP.test(value);

export const isUserUpdatingData = (user, userToUpdate)=>{
  if (user.firstName !== userToUpdate.firstName)
    return true;
  if (user.lastName !== userToUpdate.lastName)
    return true;
  if (user.email !== userToUpdate.email)
    return true;
  if (user.biography !== userToUpdate.biography)
    return true;
  if (user.username !== userToUpdate.username)
    return true;

  return false;
};
