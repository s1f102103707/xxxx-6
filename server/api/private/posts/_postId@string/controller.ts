import { defineController } from './$relay';
import { postRepo } from '$/service/postRepo';

export default defineController(() => ({
  put: async ({ params, body }) => ({
    status: 200,
    body: await postRepo.updatePost(params.postId, body)
  }),
  delete: async ({ params }) => {
    await postRepo.deletePost(params.postId);
    return { status: 204 };
  }
}));
