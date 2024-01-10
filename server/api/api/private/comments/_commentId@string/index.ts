/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** The comment has been updated */
    resBody: Types.Comment
    reqBody: Types.CommentUpdate
  }

  delete: {
    status: 204
  }
}
