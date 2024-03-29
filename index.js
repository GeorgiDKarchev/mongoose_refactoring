import './loadEnv.js'
import express from 'express';
import {conn} from './db/conn.js';conn();
import grades from './routes/grades.js';
import morgan from 'morgan';

//accessing the object with the value stored in the .env
console.log(process.env.ATLAS_URI);

//creating the app route and port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/grades', grades);

app.get("/", (req, res) => {
  res.send("Welcome to the API!!!");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});


app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
})