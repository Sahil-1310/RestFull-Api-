const express = require('express');
const routes = express.Router();
const collection  = require('../models/schema')

routes.get('/',async (req,res)=>{
try{
    const data= await collection.find()
    // console.log(data)
    res.json(data);
}catch(err)
{
    console.log('Error'+err);
}
});

routes.get('/:id' ,async (req,res)=>
{
    try{
        const data = await collection.findById(req.params.id)    //Remember it when you have find any person by id then use"findById"
        res.json(data)
        console.log(data)
    }catch(err)
    {
        res.send(err)
        console.log('error'+err)
    }

})

routes.post('/', async (req,res)=>{
    const data = new collection({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try
    {
        const a1 = await data.save()
        res.json(a1)
    }catch(err)
    {
        console.log("Error"+err)
    }
});

//Patch request
routes.patch('/:id',async (req,res)=>
{
    try
    {
        const patch = await collection.findById(req.params.id);
        patch.Sub = req.body.Sub
        console.log(patch.Sub)
        const patch1= await patch.save()
        res.json(patch1)
        console.log(patch1)
    }
    catch(err)
    {
        res.send("error"+err)
    }
});


///Delete the Id by remove method
routes.delete('/:id', async (req,res)=>
{
 try 
 {
    const d1 = await collection.findByIdAndRemove(req.params.id)
     const d2 = await d1.save()
     console.log("deleted successfully"+d2)
     res.json(d2)
 }
 catch(err)
 {
     res.send("err"+err)
 }
});

module.exports=routes;