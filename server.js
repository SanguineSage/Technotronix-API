const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const categoryRoute = require("./routes/categoryRoute")
const productRoute = require("./routes/productRoutes")
const authRoute = require("./routes/authRoute")

connectDB()
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-type", "Authorization"],
    methods:["Get", "PORT", "PUT", "PATCH", "DELETE"]
}))

app.use(express.json())
app.use("/uploads", express.static("uploads"))
app.use("/api/category", categoryRoute)
app.use("/api/product", productRoute)
app.use("/", authRoute)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`you are listening on port ${port}`)  
)            