require('dotenv').config()
const express = require('express');
const router = express.Router();
const tokensSchema = require('../models/tokens');
const articlesSchema = require('../models/articles');

const idFunctions = require('../middlewares/routesFunc');


router.get('/', async (req, res) => {
    try{
        const tokens = await tokensSchema.find();
        res.status(200).json(tokens);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
   
})

router.get('/:id', idFunctions.getTokensID, (req, res) => {
    try{
        //const ceva = {token1: res.token, token2: res.token }
        res.status(200).json(res.token);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})

router.post('/', async (req, res) => {
    console.log(req.body.Token_body);
    const token = new tokensSchema({ 
        Token_body: req.body.Token_body
       
    });
    try{
        const newToken = await token.save();
        res.status(201).json(newToken);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})


router.put('/:id', idFunctions.getTokensID, async (req, res) => {
    try{ 
     
     const updatedToken = await tokensSchema.updateOne({_id : res.token._id}, req.body);
     res.status(201).json({message: "Updated Token"});
 }
    catch(err){
      res.status(500).json({message: err.message});
     }
 })
 
 
 router.delete('/:id', idFunctions.getTokensID, async (req, res) => {
     try{
         await res.token.remove();
         const articlesTk = await articlesSchema.find({Article_tokensIDs: { $all: [req.params.id]}})
         let index;
         for(i = 0; i < articlesTk.length; i++) {
            index = articlesTk[i].Article_tokensIDs.indexOf(req.params.id)
            if(index > -1){
                articlesTk[i].Article_tokensIDs.splice(index, 1);
                await articlesTk[i].save();
            }           
        }      
        res.status(201).json({message: 'Deleted succesfully!'});
     }
     catch(err){
         res.status(500).json({message: err.message});
     }
 })



module.exports = router;