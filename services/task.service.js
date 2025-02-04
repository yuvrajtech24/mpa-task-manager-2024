// Imports
const Task = require("../models/task.model");

// Class
class TaskService {
    static async createTask(title, description, dueDate, userId) {
        // validate
        // error handling
        // business logic
        // return result

        if(!title || !description || !dueDate || !userId) {
            console.log("Invalid Input");
            throw new Error("Invalid Input");
        } else if(typeof title !== "string" || typeof description !== "string" || typeof dueDate !== "string") {
            throw new Error("Invalid Input");
        }

        try {
            let result = await Task.create(title, description, dueDate, userId);
            console.log(result);
            return result;
        } catch(err) {
            console.log("error name = ", err.name);
            console.log("error message = ", err.message);
            throw err;
        }
    }
    static async getTaskById(id) {
        if(!id || typeof id !== "number") {
            throw new Error("Invalid Input");
        }

        try {
            let result = await Task.getOne(id);
            console.log(result);
            return result;
        } catch(err) {
            console.log("error name = ", err.name);
            console.log("error message = ", err.message);
            throw err;
        }
    }
    static async getAllTask() {
        try {
            let result = await Task.getAll();
            console.log(result);
            return result;
        } catch(err) {
            console.log("error name = ", err.name);
            console.log("error message = ", err.message);
            throw err;
        }
    }
    static async updateTask(id, title, description, dueDate, userId) {
        if(!id || !title || !description || !dueDate || !userId) {
            console.log("Invalid Input");
            throw new Error("Invalid Input");
        } else if(typeof id !== "number" || typeof title !== "string" || typeof description !== "string" || dueDate !== "string" || typeof userId !== "number") {
            console.log("Invalid Input");
            throw new Error("Invalid Input");
        }

        try {
            let result = await Task.update(id, title, description, dueDate, userId);
            console.log(result);
            return result;
        } catch(err) {
            console.log("error name = ", err.name);
            console.log("error message = ", err.message);
            throw err;
        }
    }
    static async deleteTask(id) {
        if(!id || typeof id !== "number") {
            console.log("Invalid Input");
            throw new Error("Invalid Input");
        }

        try {
            let result = await Task.delete(id);
            console.log(result);
            return result;
        } catch(err) {
            console.log("error name = ", err.name);
            console.log("error message = ",err.message);
            throw err;
        }
    }
}

// Exports
module.exports = TaskService;