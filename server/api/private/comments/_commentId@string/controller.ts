import { commentRepo } from '$/service/commentRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  put: async ({ params, body }) => ({
    status: 200,
    body: await commentRepo.updateComment(params.commentId, body),
  }),
  delete: async ({ params }) => {
    await commentRepo.deleteComment(params.commentId);
    return { status: 204 };
  },
}));
