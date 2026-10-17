const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const mongoSanitize = require("mongo-sanitizer")
const path = require("path")
const xss = require("xss")
const rateLimit = require("express-rate-limit")

// idk what to name this
const globalErrorHandler = require("./controllers/error.controller")

// Routers
const userRouter = require("./routers/users.router")
const postRouter = require("./routers/posts.router")
const authRouter = require("./routers/auth.router")


dotenv.config()

const app = express()

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"))
}

app.use(cookieParser())

app.use(helmet())

app.use(mongoSanitize())

app.use(xss())

app.use(rateLimit({
    windowsMs: 60 * 60 * 1000,
    max: 100,
    message: "too many request from this IP, please try again after an hour"
}))

app.use(express.json())

app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/auth", authRouter)

app.use(globalErrorHandler)

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


