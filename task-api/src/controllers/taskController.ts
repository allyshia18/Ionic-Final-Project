import { NextFunction, Request, RequestHandler, Response } from "express";
import { ITasks, Tasks } from "../models/tasks";


// Need to create and export the callback functions for our task routes


export const getAllTask: RequestHandler = async (req, res, next) => {
    let taskList = await Tasks.find();
    res.status(200).json(taskList);
}

export const addTask: RequestHandler = async (req, res, next) => {
    const newTask: ITasks = new Tasks({
        title: req.body.title,
        completed: req.body.completed
    });

    try {
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send(err);
    }
}



export const editTask: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    const updatedTasks: ITasks = new Tasks({
        _id: itemId,
        name: req.body.name,
        title: req.body.title,
        completed: req.body.completed
    });

    let result = await Tasks.findByIdAndUpdate(itemId, { $set: updatedTasks })

    res.status(200).json(result);
}

export const deleteTask: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await Tasks.findByIdAndDelete(itemId);
    res.status(200).json(result);
}