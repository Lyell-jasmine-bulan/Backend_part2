/*import express from "express";
import 'dotenv/config.js';
import cors from "cors"
import userRoutes from "./routers/UserRoutes.js";

//init app
const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/user',userRoutes);


app.use((req, res,) => {
    console.log (req.path, req.method);
})*/



import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';  // Correct import with .js extension

dotenv.config();

const app = express();
let corsOptions = {
    origin: process.env.ORIGIN,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/user', userRoutes);

const port = process.env.PORT || 3000;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});
