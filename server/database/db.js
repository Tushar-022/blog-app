import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-jpnyefy-shard-00-00.io1lxet.mongodb.net:27017,ac-jpnyefy-shard-00-01.io1lxet.mongodb.net:27017,ac-jpnyefy-shard-00-02.io1lxet.mongodb.net:27017/?ssl=true&replicaSet=atlas-spqh8e-shard-0&authSource=admin&retryWrites=true&w=majority`;
   
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;