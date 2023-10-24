import mongoose from "mongoose";
import config from "../config";

const URI = `mongodb://${config.user}:${config.password}@${config.host}:27017/${config.database}`;

export const getConnection = async ()=> {

    try {

        await mongoose.connect(URI, {   
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("DB Mongo Connected");

    }catch(err){
        console.log("Failed to connect Mongodb");

    }
}

//exports.getConnection=getConnection;


