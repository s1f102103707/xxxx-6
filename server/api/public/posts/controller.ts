import { defineController } from './$relay';
import { postRepo } from '$/service/postRepo';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await postRepo.getPublishedPosts()
  })
}));
