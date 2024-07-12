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
  email: string;
  password: string;
  confirm_password: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
};

export type Comment_t = {
  comment: {
    id: number;
    content: string;
    timestamp: string;
  };
  username: string;
};
