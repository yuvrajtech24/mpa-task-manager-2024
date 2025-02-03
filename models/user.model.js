// Imports
const { dbConnect } = require("../config/database");

// Class
class Users{

    /**
     * get specific user;
     * @param {Number} id user id
     */
    static async getOne(id) {
        const query = `
        select * from users
        where users.id = ${id}
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
     * get all users
     */
    static async getAll() {
        const query = `
        select * from users
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
     * create new user
     * @param {String} username user name of existing user
     * @param {String} email user email
     * @param {String} role user role
     */
    static async create(username, email, role) {
        const query = `
        insert into users(username, email, role)
        values ('${username}', '${email}', '${role}')
        `;
        try{
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        } catch(err) {
            throw err;
        }
    }

    /**
     * update an existing user
     * @param {Number} id user id
     * @param {String} username user name of existing user
     * @param {String} email user email
     * @param {String} role user role
     */
    static async update(id, username, email, role) {
        const query = `
        update users
        set
        username = '${username}',
        email = '${email}',
        role = '${role}'
        where
        users.id = ${id}
        `;
        try{
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        }catch(err) {
            throw err;
        }
    }

    /**
     * delete an existing user
     * @param {Number} id user id 
     */
    static async delete(id) {
        const query = `
        delete from users
        where users.id = ${id}
        `;
        try {
            const db = await dbConnect();
            let result = await db.query(query);
            return result;
        } catch(err) {
            throw err;
        }
    }
}

// Exports
module.exports = Users;