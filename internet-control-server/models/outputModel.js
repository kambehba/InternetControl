
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var outputSchema = new Schema({
    status: {type:String}
});


module.exports = mongoose.model('Outputs',tasksSchema);