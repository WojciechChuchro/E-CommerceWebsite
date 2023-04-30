import http from "http"
import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

const app = express()

app.use(
  cors({
    credentials: true,
  })
)

app.use(cookieParser())
app.use(compression())
app.use(bodyParser.json())

const server = http.createServer(app)
const PORT = 8080
const MONGO_URL =
  "mongodb+srv://paxters:eAIxHS4uBQx5IFud@e-commerce-website-clus.spnmf0o.mongodb.net/?retryWrites=true&w=majority"

server.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)
})

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => {
  console.log(error)
})
