import { defineController } from './$relay';
import { commentRepo } from '$/service/commentRepo';

export default defineController(() => ({
  put: async ({ params, body }) => ({
    status: 200,
    body: await commentRepo.updateComment(params.commentId, body)
  }),
  delete: async ({ params }) => {
    await commentRepo.deleteComment(params.commentId);
    return { status: 204 };
  }
}));
