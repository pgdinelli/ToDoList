import Task from "../models/taskModel.js";

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findAllTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if(!task) return res.status(404).json({ message: 'Task not found'} );

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body);
        
        if(!task) return res.status(404).json({ message: 'Task not found' });

        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if(!task || task === null) return res.status(404).json({ message: 'Task not found' });

        res.status(200).json({ message: 'Task deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createTask, findAllTasks, findTaskById, updateTask, deleteTask };