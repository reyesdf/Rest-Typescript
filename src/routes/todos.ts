import { Router, Response, Request, NextFunction } from 'express';
import { Todo } from '../util/types';

const todos: Todo[] = [];

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ todos: todos });
});

router.post('/todo', (req: Request, res: Response, next: NextFunction) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    todo: req.body.todo,
  };
  todos.push(newTodo);
  res.status(201).json({ message: 'Added Successfully' });
});

export default router;
