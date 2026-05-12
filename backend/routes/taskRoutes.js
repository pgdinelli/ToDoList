import express from 'express';
import { createTask, findAllTasks, findTaskById, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', findAllTasks);
router.get('/:id', findTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;