const Joi = require('joi');  




const express =require('express');
const app= express();

app.use(express.json())
var methods= require('./methods');

 

app.post( '/houssam' ,(req, res) =>{ 
    
    
 const schema = Joi.object({
             name: Joi.string().min(3).required(),
                 });

  // Validate the request body against the schema
  const { error , value } = schema.validate(req.body);

  // If validation fails, return a 400 response with the error message
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // If validation passes, return a success response
  res.send(value);
  console.log('Valid Input:', value);
   });
   
   
   
   
   
   
   
   app.get( '/courses/:id' ,(req, res) =>{

    const cours= courses.find(vule=> vule.id===parseInt(req.params.id));
    error(cours, );
   
   });


const port = process.env.PORT || 3000;
app.listen(port ,'0.0.0.0', ()=>{

    console.log(`start server http://localhost:${port} ...`);
});

 