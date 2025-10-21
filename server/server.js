const express = require("express");
const dotenv=require("dotenv");
const cors = require("cors");
const studentsRoutes = require("./routes/students");
const path = require("path");
const connectDB= require("./config/db");
const app = express();
dotenv.config();
// Middleware

app.use(express.json());
app.use(express.static("uploads"))
connectDB();

app.use(cors({origin:"http://localhost:5173",credentials:true}))

// Routes
app.use("/students", studentsRoutes);
app.listen(4000, ()=>{
    console.log("server is running on PORT 4000!")
})

