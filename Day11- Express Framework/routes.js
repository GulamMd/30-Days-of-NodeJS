const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home page");
})

app.get('/signup', (req, res) => {
    res.send("SignUp Page");
})

app.get('/signin', (req, res) => {
    res.send("Sign In Page");
})

app.get('/signin/dashboard', (req, res) => {
    res.send("Dashboard page after signin");
})
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://127.0.0.1:${port}`);
})

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));