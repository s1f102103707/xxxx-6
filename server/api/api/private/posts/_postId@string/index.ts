/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** The post has been updated */
    resBody: Types.Post
    reqBody: Types.PostUpdate
  }

  delete: {
    status: 204
  }
}
