import { defineController } from './$relay';
import { commentRepo } from '$/service/commentRepo';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await commentRepo.createComment(body)
  })
}));
