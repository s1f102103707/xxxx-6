/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 201
    /** The comment has been created */
    resBody: Types.Comment
    reqBody: Types.CommentCreate
  }
}
