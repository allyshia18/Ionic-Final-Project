import { Document, Model, Schema, model } from 'mongoose';


interface ITasks extends Document {
    title: string;
    completed: boolean;
}

const tasksSchema: Schema = new Schema({
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

const Tasks: Model<ITasks> = model ('Tasks', tasksSchema);

export { ITasks, Tasks};