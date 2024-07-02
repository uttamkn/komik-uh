export type Comic = {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
};

export type UserSignIn = {
  username: string;
  password: string;
};

export type UserSignUp = {
  username: string;
  password: string;
  confirm_password: string;
};

// Object structure in local storage
export type LocalStorage = {
  access_token: string;
  token_type: string;
  user: any; //TODO: Define the user object
};
