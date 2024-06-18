import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';

const app = express();
const port = process.env.PORT || 3010;

// Utility to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));

// Set up body parser to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Use auth routes
app.use('/', authRoutes);

// Default route for serving the signup form
app.get('/signup', (req, res) => {
    res.sendFile(path.join(static_path, 'signup.html'));
});

// Default route for serving the login form
app.get('/login', (req, res) => {
    res.sendFile(path.join(static_path, 'login.html'));
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});