import express from 'express';
const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    let error = "";

    if (!username.trim()) {
        error = 'Username is required';
    } else if (!email.trim()) {
        error = 'Email is required';
    } else if (!isValidEmail(email)) {
        error = 'Invalid email format';
    } else if (password.length < 8 || !password.trim()) {
        error = 'Password must be at least 8 characters long';
    }

    if (error) {
        return res.status(400).send(error);
    }

    // Add your database logic here to save the user data
    // For demonstration purposes, we just return a success message
    res.send('Signup successful');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    let error = "";

    if (!username.trim()) {
        error = 'Username is required';
    } else if (password.length < 8 || !password.trim()) {
        error = 'Password must be at least 8 characters long';
    }

    if (error) {
        return res.status(400).send(error);
    }

    // Add your database logic here to check the user credentials
    // For demonstration purposes, we just return a success message
    res.send('Login successful');
});

// Helper function to validate email format
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default router;