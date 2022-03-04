export { Request, Response, NextFunction };
import { Request, NextFunction, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoTypes } from '../util/types';

const Todo = require('../models/todo');

exports.getTodos = (req: Request, res: Response, next: NextFunction) => {
  Todo.findAll()
    .then((todos: {}) => {
      res.status(200).json({ todos: todos });
    })
    .catch((err: any) => {
      console.log(err);
    });

  // res.status(200).json({ todos: todos });
};

exports.postTodos = (req: Request, res: Response, next: NextFunction) => {
  const id = uuidv4();
  const todo = req.body.todo;
  const priority = req.body.priority;

  Todo.create({
    id: id,
    todo: todo,
    priority: priority,
  })
    .then(() => {
      res.status(201).json({ message: 'Added Successfully' });
    })
    .catch((err: any) => {
      console.log(err);
    });
};
