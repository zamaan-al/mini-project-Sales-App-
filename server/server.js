const express=require("express");
const connectDB = require("./config/db");
const salesRoute=require("./routes/sales")
const app=express();
require("dotenv").config();
const cors = require("cors");
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
connectDB();
app.use("/sales",salesRoute)


app.listen(4000,()=>{
    console.log("server is running successfully ")
})
