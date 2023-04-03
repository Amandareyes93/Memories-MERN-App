import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js'


const app = express();


//esto se hacia antes, ahora viene incorporado, hacer de la forma de abajo
// app.use(bodyParser.json({ limit: "30mb", extended: true }))
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRoutes)

//MongoDB Atlas: https://www.mongodb.com/cloud/atlas


const CONNECTION_URL = 'mongodb+srv://amanda:24567100@cluster0.hcloysz.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000; //heroku crea por defualt esta variable

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(PORT, console.log(`Server is running on port ${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);




