require('dotenv').config()
const express = require('express');
const router = express.Router();
const articleSchema = require('../models/articles');
const Token = require('../models/tokens');

const idFunctions = require('../middlewares/routesFunc');
//200 -- OK (all's good)
//201 -- Succes (succesfully created an object)

//500 -- sv side error (bad connection string)
//400 -- client side error (bad params, body)
//404 -- not found

//GET all
router.get('/', async (req, res) => {
    try{
        const articles = await articleSchema.find();
        //find -- return all docs if we do not give any params
        res.status(200).json(articles);
    }
    catch(err) {
        res.status(500).json({message: err.message});W
    }
   
})


//GET one  -- name
router.get('/:id', idFunctions.getArticleID, async (req, res) => {
    try{
        res.status(200).json(res.article);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
    
})


//POST
router.post('/', async (req, res) => {
    const article = new articleSchema({ 
        Article_no: req.body.Article_no,
        Article_short_description: req.body.Article_short_description,
        Article_tokensIDs: req.body.Article_tokensIDs,
        Article_categoryID: req.body.Article_categoryID,
        Article_source: req.body.Article_source,
        Article_URL: req.body.Article_URL,
        Location: req.body.Location,
        Article_keywords: req.body.Article_keywords, 
        Article_weight: req.body.Article_weight,
        Article_citations: req.body.Article_citations

    });

    try{
        const newArticle = await article.save();
        // save -- add/update new doc to db
        res.status(201).json(newArticle);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

//Put
router.put('/:id', idFunctions.getArticleID, async (req, res) => {
   try{ 
    
    const updatedArticle = await articleSchema.updateOne({_id : res.article._id}, req.body);
    res.status(201).json({message: "Updated Article"});
}
   catch(err){
     res.status(500).json({message: err.message});
    }
})

//Patch 
router.patch('/:id', idFunctions.getArticleID, async (req, res) => {
    try{ 
     if(req.body.token!= null){
        res.article.Article_tokensIDs.push(req.body.token);
     }
     const updatedArticle = await res.article.save();
     res.status(201).json({message: "Updated Article"});
 }
    catch(err){
      res.status(500).json({message: err.message});
     }
 })

//DELETE
router.delete('/:id', idFunctions.getArticleID, async (req, res) => {
    try{
        await res.article.remove();
        res.status(201).json({message: 'Deleted succesfully!'});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})




module.exports = router;