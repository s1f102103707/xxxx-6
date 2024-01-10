import { postRepo } from '$/service/postRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await postRepo.createPost(body),
  }),
}));
