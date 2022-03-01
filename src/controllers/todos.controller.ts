export { Request, Response, NextFunction };
import { Request, NextFunction, Response } from 'express';
import { Todo } from '../util/types';

const todos: Todo[] = [];

exports.getTodos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ todos: todos });
};

exports.postTodos = (req: Request, res: Response, next: NextFunction) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    todo: req.body.todo,
  };
  todos.push(newTodo);
  res.status(201).json({ message: 'Added Successfully' });
};
