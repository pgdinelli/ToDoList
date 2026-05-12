import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const databaseUri = process.env.MONGODB_URI;

const connectionDB = async () => {
    try {
        mongoose.connect(databaseUri);
        console.log('Connection to database successful!');
    } catch (error) {
        console.log('Database connection failed.');
    }
}

export default connectionDB;