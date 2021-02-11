import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  try {
    return response.json({ message: 'list user ...!' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
