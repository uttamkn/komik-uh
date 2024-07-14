export type Comic = {
  id: number;
  title: string;
  author: string;
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

export type ReadingProgress = {
  id: number;
  bookrepo_id: number;
  page_num: number;
  user_id: number;
};
