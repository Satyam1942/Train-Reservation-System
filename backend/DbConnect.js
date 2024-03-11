const mongoose = require('mongoose');

let db
const uri=""

connectToDb:()=>{
    const mongoose = require('mongoose');

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
        db = mongoose.connection.name;
        console.log('Connected to database:', dbName);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

}

module.exports(connectToDb,db);