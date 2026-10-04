const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = express()

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"))
}

const port = process.env.PORT

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('Connected to mongoDB');

        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
        
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });


