var configValues = require('./config');
module.exports = {

getDbConnectionString:function(){
    
        //return 'mongodb://' + configValues.username +':' +configValues.password+'@ds159747.mlab.com:59747/task-manager';
        return 'mongodb://localhost/InternetControlDatabase';

    }
}