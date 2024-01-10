/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  post: {
    status: 201;
    /** The post has been created */
    resBody: Types.Post;
    reqBody: Types.PostCreate;
  };
};
