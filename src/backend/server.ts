
import dotenv from 'dotenv'
import express from 'express'
import connectDB from "./connectDB.js";
import agendaRoute from "./agenda.js";
dotenv.config();

const app=express();
connectDB()

const PORT=1000;

app.use(`/api/users`,agendaRoute)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})


