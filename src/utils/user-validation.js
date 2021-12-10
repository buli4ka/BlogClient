import { USER_INPUT_LENGTH } from '../constants/user';

export const isUserValid = input => {
  switch (input){
    case !input:
      return false;
    case input.length > USER_INPUT_LENGTH.STANDART:
      return false;
  }
};

export const isRegistrationDataValid = ({ firstname, lastname, email, username, password }) => {

};
