const dotenv = require('dotenv');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const app = require('./app');

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



// For http connecrtion
// --------- BUG: Internal Error After AWS Lambda deployment --------
// --------- localhost server listening => OK --------

// module.exports.handler = serverless(app);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});