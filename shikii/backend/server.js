const dotenv = require('dotenv');
const mongoose = require('mongoose');
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

// server connection

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listening to port ${port}...`);
});
