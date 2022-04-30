export interface iPost {
  id: number;
  name: string;
  description: string;
  image?: string;
  images?: string[];
  video?: string;
  user: iUser;
  nofLikes: number;
  nofComments: number;
  createdAt: string;
  comment: iComment[];
}

export interface iUser {
  id: number;
  name: string;
  username: string;
  image: string;

  email: string;
  bio?: string;
  password: string;
  posts?: iPost[];
}

export interface iComment {
  id: number;
  user: iUser;
  comment: string;
  createdAt: string;
}

export interface iChildren {
  title: string;
  children: JSX.Element;
}
