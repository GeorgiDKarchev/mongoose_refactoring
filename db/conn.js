// //holds conection to a client /conecting to a new client
// import {MongoClient} from "mongodb";
import mongoose from 'mongoose';


export async function conn() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to MongoDB / mongoose');
     } catch (error) {
        console.log(error.message);

     }
}

// //conect string in .env file 
// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;

// try {
//     conn = await client.connect();
//     console.log("Connecting to MongoDB"); //we can see if working
// } catch (e) {
//     console.log(e);
// }

// const db = conn.db("sample_training");
// export default db;