import { defineController } from './$relay';
import { postRepo } from '$/service/postRepo';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await postRepo.createPost(body)
  })
}));
