// Imports
const { createConnection } = require("mysql2/promise");

// connection config
const connectionOptions = {
    host: "localhost",
    port: 3306,
    database: "mpa_task_manager_2024",
    user: "root",
    password: "kamwalibai",

}

// Function
async function dbConnect() {
    try {
        let dbConnection = await createConnection(connectionOptions);
        return dbConnection;
    } catch(err) {
        console.log("database connection failed!!");
        console.log("error name = ", err.name);
        console.log("error message = ", err.message);
    }
}

// Exports
module.exports = {dbConnect}