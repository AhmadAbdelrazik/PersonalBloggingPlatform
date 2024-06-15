require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const postRouter = require('./router/posts');

async function connect(db) {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);
}

connect('blogPost');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', postRouter);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON');
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, _ => console.log(`Started listening at ${port}`))