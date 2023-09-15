const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AppError = require('./util/AppError');
const globalErrorHandler = require('./controllers/errorController');
const articleRouter = require('./routes/articleRoute');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const faqRouter = require('./routes/faqRoute');


const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(morgan('dev'));


app.use(cors({ origin: true, credentials: true, exposedHeaders: ["set-cookie"] }));


// route
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/faq', faqRouter);
app.use('/api/v1/users', userRouter);


// error handling
app.all('*', (req, res, next) => {
    res.status(404).json({
        data: {
            status: 'fail',
            message: "something went wrong.."
        }
    });
});

app.use(globalErrorHandler);

module.exports = app;
