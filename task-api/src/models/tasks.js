"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const mongoose_1 = require("mongoose");
const tasksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    completed: {
        type: Boolean,
        required: true
    }
});
const Tasks = (0, mongoose_1.model)('Tasks', tasksSchema);
exports.Tasks = Tasks;
