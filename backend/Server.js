import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
// const 5000 = process.env.5000 || 5000;
app.get("/",(req,res) => {
    res.send("Server is ready");
})
app.listen(5000 , () => 
    console.log("Server is running on port 5000")
);