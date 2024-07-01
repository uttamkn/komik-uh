export type Comic = {
  id: number;
  title: string;
  image: string;
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

// Token structure in local storage
export type Token = {
  access_token: string;
  token_type: string;
  user: any;
};
