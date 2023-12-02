"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
// GET /tasks - returns a list of all tasks
router.get('/', taskController_1.getAllTask);
// POST /tasks: creates a new task
router.post('/', taskController_1.addTask);
// PUT /tasks/:id - updates an existing task
router.put('/:id', taskController_1.editTask);
// DELETE /tasks/:id: deletes an existing task
router.delete('/:id', taskController_1.deleteTask);
exports.default = router;
