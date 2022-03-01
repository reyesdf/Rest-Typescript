import { Router, Response, Request, NextFunction } from 'express';
import { Todo } from '../util/types';
const TodosController = require('../controllers/todos.controller');

const router = Router();

router.get('/', TodosController.getTodos);

router.post('/todo', TodosController.postTodos);

export default router;
