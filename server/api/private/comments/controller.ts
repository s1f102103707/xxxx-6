import { commentRepo } from '$/service/commentRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await commentRepo.createComment(body),
  }),
}));
