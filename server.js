const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mngoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ish:ish1@ish1.jbmusg9.mongodb.net/?retryWrites=true&w=majority&appName=ish1'

const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log('connect to MongoDB');
    }catch(error){
        console.log('MongoDB Error: ',error);
    }
};

connect();

const server = app.listen(port,host,() => {
    console.log(`Node Server is Listening to ${server.address().port}`)
});

app.use('/api', router);