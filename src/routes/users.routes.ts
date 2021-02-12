import { Router } from 'express';
import axios from 'axios';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  try {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    response.status(200).json(users.data);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
