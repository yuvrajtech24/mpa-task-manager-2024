// Imports
const Users = require("../models/user.model");

// Class
class UserService {
    static async createUser(username, email, role) {
        // service method template
        // validate inputs
        // error handling
        // business logic
        // return result

        // validate inputs
        if(!username || !email || !role) {
            console.log("invalid input");
            throw new Error("invalid input");
        } else if(typeof username !== "string" || typeof email !== "string" || typeof role !== "string") {
            console.log("invalid input");
            throw new Error("invalid input"); 
        }

        // try catch block - error handling
        try {
            // business logic
            let result = await Users.create(username, email, role);
            // return result
            console.log(result);
            return result; 
        } catch(err) {
            console.log("err name = ", err.name);
            console.log("err message = ", err.message);
            throw err; 
        }
    }

    static async getUserById(id) {
        
        if(!id || typeof id !== "number") {
            console.log("invalid input");
            throw new Error("invaid input");
        }

        try{
            let result = await Users.getOne(id);
            console.log(result);
            return  
        }catch(err) {
            console.log("error name = ", err.name);
            return console.log("error message = ", err.message);
        }
    }

    static async getAllUser() {
        try {
            let result = await Users.getAll();
            return console.log(result);
        } catch(err) {
            console.log("error name = ", err.name);
            return console.log("error message = ", err.message);
        }
    } 

    static async updateUser(id, username, email, role) {
        if(!id || !username || !email || !role) {
            return console.log("invalid input");
        } else if(
            typeof id !== "number" || 
            typeof username !== "string" || 
            typeof email !== "string" || 
            typeof role !== "string"
        ) {
            return console.log("invalid input");
        }

        try {
            let result = await Users.update(id, username, email, role);
            return console.log(result);
        }catch(err) {
            console.log("error name = ", err.name);
            return console.log("error message = ", err.message);
        }
    }

    static async deleteUser(id) {
        if(!id || typeof id !== "number"){
            return console.log("invalid input");
        }

        try {
            let result = await Users.delete(id);
            return console.log(result);
        }catch(err) {
            console.log("error name = ", err.name);
            return console.log("error message = ", err.message);
        }
    }
}

// Exports
module.exports = UserService;