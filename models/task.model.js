// Imports
const { dbConnect } = require("../config/database");

// Class
class Task{

    /**
     * Create a new task
     * @param {String} title title of task
     * @param {String} description description of task
     * @param {Date} dueDate due date of task
     * @param {Number} userId user id of user who is creating this task
     */
    static async create(title, description, dueDate, userId) {
        const query = `INSERT INTO tasks(title, description, dueDate, userId) VALUES('${title}', '${description}', '${dueDate}', '${userId}')`;

        try{
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        } catch(err) {
            throw err;
        }
    }

    /**
     * Get a specific task
     * @param {Number} id id of a task
     */
    static async getOne(id) {
        const query = `SELECT tasks.title, tasks.description, tasks.dueDate, users.username, users.email, users.role
        FROM tasks 
        INNER JOIN users
        ON tasks.userId = users.id
        WHERE tasks.id = ${id}`;

        try {
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        } catch(err) {
            throw err;
        }
    }

    /**
     * get all tasks
     */
    static async getAll() {
        const query = `SELECT tasks.title, tasks.description, tasks.dueDate, users.username, users.email, users.role 
        FROM tasks
        INNER JOIN users
        ON tasks.userId = users.id
        `;

        try {
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        } catch(err) {
            throw err;
        }
    }

    /**
     * update task and assigned users data
     * @param {Number} id id of a task
     * @param {String} title title of task
     * @param {String} description description of task
     * @param {String} dueDate due date of task
     * @param {Number} userId user id of user who is creating this task
     * @returns 
     */
    static async update(id, title, description, dueDate, userId) {
        const query = `
        update tasks
        set 
        title = '${title}',
        description = '${description}',
        dueDate = '${dueDate}',
        userId = ${userId}
        where
        id = ${id}
        `;
        try {
            const db = await dbConnect();
            let result = db.query(query);
            return result;
        }catch(err) {
            throw err;
        }
    }

    /**
     * delete a specific task
     * @param {Number} id id of a task
     * @returns 
     */
    static async delete(id) {
        const query = `
        delete from tasks
        where id = ${id}
        `;
        try{
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        }catch(err) {
            throw err;
        }
    }
}

// Exports
module.exports = Task;