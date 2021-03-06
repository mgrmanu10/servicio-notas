const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL= (process.env.MONGO_URL || 'mongodb://mongo/test');

const dbConnection = async()=>{

    try{
       
       await mongoose.connect(DB_URL,
        {
            useNewUrlParser: true
        });
        console.log(process.env.MONGO_URL) 
        console.log('DB Online')
        
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de inicializar la base de datos')
    }

}

module.exports={dbConnection}