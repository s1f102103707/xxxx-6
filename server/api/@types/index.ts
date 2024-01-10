/* eslint-disable */
export type User = {
  id?: string | undefined;
  email?: string | undefined;
  name?: string | null | undefined;
};

export type Post = {
  id?: string | undefined;
  title?: string | undefined;
  content?: string | null | undefined;
  published?: boolean | undefined;
  authorId?: string | undefined;
};

export type PostCreate = {
  title: string;
  content?: string | null | undefined;
  authorId: string;
};

export type PostUpdate = {
  title?: string | undefined;
  content?: string | null | undefined;
  published?: boolean | undefined;
};

export type Comment = {
  id?: string | undefined;
  text?: string | undefined;
  postId?: string | undefined;
  authorId?: string | undefined;
};

export type CommentCreate = {
  text: string;
  postId: string;
  authorId: string;
};

export type CommentUpdate = {
  text: string;
};
