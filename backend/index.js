const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const serverless = require("serverless-http");


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



const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening to the port ${port}`);
});

// module.exports.hello = serverless(app);
