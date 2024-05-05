import { nameRegex, emailRegex, mobileRegex } from "../constants/constants";

const validateSignUp = (values) => {
  const { userName, email, mobile, password, rePassword } = values;
  const errors = {};

  //   Name validate
  if (!userName.trim().length) {
    errors.userName = "Required*";
  } else if (userName.length > 15) {
    errors.userName = "Must be 15 characters or less.";
  } else if (!nameRegex.test(userName)) {
    errors.userName = "First letter must be capital.";
  }
  //   email validate
  if (!email.trim().length) {
    errors.email = "Required*";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email format.";
  }
  //   Mobile validate
  if (!mobile.trim().length) {
    errors.mobile = "Required*";
  } else if (!mobileRegex.test(mobile)) {
    errors.mobile = "Invalid mobile format";
  }

  if (!password.trim().length) {
    errors.password = "Required*";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    errors.password = "Password must contain uppercase and lowercase letters.";
  } else if (!/\d/.test(password)) {
    errors.password = "Password must contain at least one digit.";
  } else if (!/[@$!%*?&]/.test(password)) {
    errors.password = "Password must contain at least one special character.";
  }

  //   RePassword validate
  if (!rePassword.trim().length) {
    errors.rePassword = "Required*";
  } else if (rePassword.length !== password.length || rePassword !== password) {
    errors.rePassword = "Password is not matching";
  }

  return errors;
};
export { validateSignUp };
