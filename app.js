require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const postRouter = require('./router/posts');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', postRouter);

app.listen(port, _ => console.log(`Started listening at ${port}`))