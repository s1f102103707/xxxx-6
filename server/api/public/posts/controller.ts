import { postRepo } from '$/service/postRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await postRepo.getPublishedPosts(),
  }),
}));
