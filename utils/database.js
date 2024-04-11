import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is Connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        isConnected = true;
        console.log('MongoDB Connected')
    } catch (error) {
        console.log('MongoDB is not connected', error)
    }
} 