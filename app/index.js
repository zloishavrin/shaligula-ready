const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const testRouter = require('./routers/testRouter')
const init = require('./init');

const PORT = 3333;
const dbUri = `mongodb://devroot:devroot@mongo:27017/university?authSource=admin`;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/university-api', testRouter);
app.use('/university-image', express.static(path.join(__dirname, 'image')));

const start = async () => {
    try {
        await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        //init();
    }
    catch(error) {
        console.log(error);
    }
}

start();

