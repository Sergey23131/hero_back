require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const heroesRouter = require('./routers/hero-router');
const fileUpload = require('express-fileupload');


const {PORT, MONGO_CONNECT_URL} = require('./configs/config');


const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(MONGO_CONNECT_URL);

app.use('/heroes', heroesRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
