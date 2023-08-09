import express from 'express';
import { MongoClient } from 'mongodb';
import {db,connectToDb} from './db.js'

const app=express()
app.use(express.json());

app.get('/api/articles/:name', async (req,res)=>{
    const {name}= req.params
 
    const article = await db.collection('articles').findOne({name})
    if (article){
    res.json(article)
    }
    else{
        res.sendStatus(404).send('article not found');
    }
})
app.put('/api/articles/:name/upvote',async (req,res)=>{
    const {name}= req.params;
    await db.collection('articles').findOne({ name },{$inc:{upvotes:1}})
    const article = await db.collection('articles').findOne({name})
    if(article) 
    {
    res.send(`The ${name} article now has ${article.upvotes} upvotes`)}
    else{
        res.send(`that article doesn't exist`)
    }

})

app.post('/api/articles/:name/comments', async (req,res)=>{
    const { postedBy,text } = req.body
    const {name}=req.params
 
    await db.collection('articles').updateOne({name},{$push:{comments:{postedBy,text}}})
    const article = await db.collection('articles').findOne({name})
    if(article){
        //article.comments.push({postedBy,text})
        res.send(article.comments)
    }
    else{
        res.send(`That article doesn't exist`)
    }

})

// app.post('/hello',(req,res)=>{
//     console.log(`here`)
//     console.log(req.body);
//     res.send('hello');
// })

// app.get(`/hello/:name/goodbye/:otherName`,(req,res)=>{
//     console.log(req.params)
//     const { name } = req.params
//     res.send(`Hello ${name}`)

// })
connectToDb(()=>{
    console.log(`succesfully connected to DB`)
    app.listen(5500,()=>{
    console.log(`listening at port 5500`)
    })
})