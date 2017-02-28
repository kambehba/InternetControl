
var outputs = require('../models/outputModel');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    //http GET
    app.get('/api/outputs',function(req,res)
    {
        Tasks.find({},function(err,tasks)
                        {
                            if(!err)
                            {res.send(tasks);
                            }
                        });          
    });


    //http POST & UPDATE
    app.post('/api/outputs',function(req,res)
    {
        
         //UPDATE
        if(req.body.id)
        {
        
            Tasks.findById({_id:new mongoose.mongo.ObjectID(req.body.id)}, function (err, task) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                if (!task) {
                    return res.status(500).json({
                        title: 'No Message Found!',
                        error: {message: 'Message not found'}
                    });
                }
                console.log("*******************"+req.body.description);
                task.description = req.body.description;
                task.status = req.body.status;
                
                console.log("*******************"+task.description);
                task.save(function(err, result) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    res.status(200).json({
                        message: 'Updated message',
                        obj: result
                    });
                });
            });

        }//End of UPDATE

        //CREATE
        else
        {
            var newTask = outputs({description:req.body.description,status:req.body.status});
            //newTask.save(function(err){if(err)throw err; res.send('success');});

            newTask.save(function(err,result){
                if(err){
                    return res.status(500).json({
                        title:'An Error occured',
                        error:err
                    });
                }
                res.status(201).json({
                    message:'saved task',
                    obj:result
                });
            });
        }//End of CREATE
        
    });//End of POST
   

    app.delete('/api/tasks',function(req,res)
    {
        
      Tasks.findById({_id:new mongoose.mongo.ObjectID(req.body.id)}, function (err, task) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!task) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        task.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });

    });//End if Delete


}// End of the Controller