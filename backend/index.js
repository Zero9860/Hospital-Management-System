import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import docRoutes from './routes/doctorRoutes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { db } from './db/conn.js';
const app = express();
const port = process.env.PORT || 3010;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

// Utility to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
const static_path = path.join(__dirname, '../public');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(static_path));



app.use('/user',userRoutes)
app.use('/department',docRoutes)




app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
    db();
});