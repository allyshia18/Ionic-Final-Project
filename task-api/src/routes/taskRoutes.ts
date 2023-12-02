import { Router } from 'express';
import { addTask, deleteTask, editTask, getAllTask } from '../controllers/taskController';

const router = Router();

// GET /tasks - returns a list of all tasks
router.get('/', getAllTask);

// POST /tasks: creates a new task
router.post('/', addTask);

// PUT /tasks/:id - updates an existing task
router.put('/:id', editTask);

// DELETE /tasks/:id: deletes an existing task
router.delete('/:id', deleteTask);








export default router;