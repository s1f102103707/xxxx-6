import { userRepo } from '$/service/userRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await userRepo.getUsers(),
  }),
}));
