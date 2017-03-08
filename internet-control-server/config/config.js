var configValues = require('./config');
module.exports = {

getDbConnectionString:function(){
    
        //return 'mongodb://' + configValues.username +':' +configValues.password+'@ds159747.mlab.com:59747/task-manager';
        //return 'mongodb://localhost/InternetControlDatabase';
        return 'mongodb://output-server:k8084164@ds123050.mlab.com:23050/app-data';
        //return 'mongodb://kambehba:ka1028ehb@ds123050.mlab.com:23050/app-data';

    }
}