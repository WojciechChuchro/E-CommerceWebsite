import http from "http"
import cors from "cors"
import express from "express"
import compression from "compression"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import router from "./router"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 8081
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(compression())
app.use(express.json())

const server = http.createServer(app)

const MONGO_URL =
  "mongodb+srv://paxters:eAIxHS4uBQx5IFud@e-commerce-website-clus.spnmf0o.mongodb.net/?retryWrites=true&w=majority"

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => {
  console.log(error)
})

app.use("/", router())
