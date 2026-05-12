import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        status: {
            type: Boolean,
            default: false,
        },
    },

    {
        timestamps: true,
    },
);

// Converts schema to a model
const Task = mongoose.model('Task', taskSchema);

export default Task;