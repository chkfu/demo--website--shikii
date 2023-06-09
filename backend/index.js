const serverless = require('serverless-http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// environment

dotenv.config({ path: './config.env' });

// mongodb connection

const Database = process.env.DATABASE_LINK.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', true);

mongoose
    .connect(Database)
    .then(() => console.log('Database connected successfully...'));


// deployment

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening to the port ${port}`);
});

// module.exports.handler = serverless(app);

