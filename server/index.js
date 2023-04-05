import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js'
import dotenv from 'dotenv';


const app = express();
dotenv.config();

//esto se hacia antes, ahora viene incorporado, hacer de la forma de abajo
// app.use(bodyParser.json({ limit: "30mb", extended: true }))
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRoutes)

//MongoDB Atlas: https://www.mongodb.com/cloud/atlas

const PORT = process.env.PORT || 5000; 

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(PORT, console.log(`Server is running on port ${PORT}`)))
.catch((error)=>console.log(error.message));






