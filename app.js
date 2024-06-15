require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


// Add a post
app.post('/');

// Read a post
app.get('/:id');

// Read the latest posts
app.get('/');

// Change a post
app.put('/');

// Delete a post
app.delete('/');



app.listen(port, _ => console.log(`Started listening at ${port}`))