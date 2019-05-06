const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = "mongodb+srv://admin:a123456@ooadproject-0v8oe.mongodb.net/test?retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true }); 
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });

beforeEach((done) => {
    mongoose.connection.collections.buildings.drop(() => {

        done(); 
    }); 
});