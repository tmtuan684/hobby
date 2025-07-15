/**
 * @file index.js
 * @description Express server with middleware to server stattic files
 * @requires express, express.static
 * @author Tuan 
 */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname) ,'./views');

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Route
app.get(['/','/index'], (req, res) => {
  // res.render('index'); // Render the index page
  res.send("This is the index page")
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
