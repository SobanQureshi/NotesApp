const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost:27017'

const connectToMongo = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
module.exports = connectToMongo