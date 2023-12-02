"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.addTask = exports.getAllTask = void 0;
const tasks_1 = require("../models/tasks");
// Need to create and export the callback functions for our task routes
const getAllTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let taskList = yield tasks_1.Tasks.find();
    res.status(200).json(taskList);
});
exports.getAllTask = getAllTask;
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = new tasks_1.Tasks({
        title: req.body.title,
        completed: req.body.completed
    });
    try {
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.addTask = addTask;
const editTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.id;
    const updatedTasks = new tasks_1.Tasks({
        _id: itemId,
        name: req.body.name,
        title: req.body.title,
        completed: req.body.completed
    });
    let result = yield tasks_1.Tasks.findByIdAndUpdate(itemId, { $set: updatedTasks });
    res.status(200).json(result);
});
exports.editTask = editTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.id;
    let result = yield tasks_1.Tasks.findByIdAndDelete(itemId);
    res.status(200).json(result);
});
exports.deleteTask = deleteTask;
