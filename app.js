require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const errorHandler = require('./Middleware/errorHandler');
const postRouter = require('./router/posts');

async function connect(db) {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);
  console.log('Connected Successfully');
}

connect('blogPost');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', postRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

app.listen(port, _ => console.log(`Started listening at ${port}`))