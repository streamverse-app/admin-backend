const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
    res.send('Admin Backend Server is Running!');
});

// Admin Login Endpoint
app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;

    // Yahan apna secret admin password check karein
    if (password === 'mySecretAdminPassword123') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password!' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});