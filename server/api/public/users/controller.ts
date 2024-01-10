import { defineController } from './$relay';
import { userRepo } from '$/service/userRepo';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await userRepo.getUsers()
  })
}));
