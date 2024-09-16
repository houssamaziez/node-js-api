
 
const express =require('express');
const courses =require('./data');
const app= express();
app.use(express.json()); 
app.use(express.json());

  function get(req, res){
    res.send(courses);
   }
   
   
   function post(req, res){

    var course= {
    id : courses.length+1,
    name:req.body.name
    };

    courses.push(course);

    res.send(course); 
    }

  module.exports.get=get;
  module.exports.post=post;