require('dotenv').config()
const express = require('express');

const tokensSchema = require('../models/tokens');
const articlesSchema = require('../models/articles');
const categoriesSchema = require('../models/categories');

async function getTokensID(req, res, next){
    let token;
    try{
        token = await tokensSchema.findById(req.params.id);
        // findById -- find docs by id
        if(token == null){
            return res.status(404).json({message: 'Token not found'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.token = token;
        next();  //move on
}

    async function getArticleID(req, res, next){
        let article;
        try{
            article = await articlesSchema.findById(req.params.id);
            // findById -- find docs by id
            if(article == null){
                return res.status(404).json({message: 'Article not found'})
            }
        }
        catch(err){
        return res.status(500).json({message: err.message})
        }
        
            res.article = article;
            next();  //move on
        }
        
  

            async function getCategoriesID(req, res, next){
                let category;
                try{
                    category = await categoriesSchema.findById(req.params.id);
                    // findById -- find docs by id
                    if(category == null){
                        return res.status(404).json({message: 'Category not found'})
                    }
                }
                catch(err){
                return res.status(500).json({message: err.message})
                }
                
                    res.category = category;
                    next();  //move on
                }

module.exports = {
    getTokensID,
    getArticleID,
    getCategoriesID
}