const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Page")
});

app.get('/signup', (req, res) => {
    // this is how we will receive params from front end 
	
	var name = req.query.name; 
    var email = req.query.email;
    var password = req.query.password;
    //For demo purpose
    console.log(name + '' + email + ' ' + password);
  
    /**
     * Store this in a database and perform further processing
    */
    res.send("In signup module")
})
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));