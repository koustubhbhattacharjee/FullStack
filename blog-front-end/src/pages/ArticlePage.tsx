import { useState,useEffect } from 'react'
import NotFoundPage from './NoteFound';
import React from 'react';
import { useParams } from 'react-router';
import articles from './articlecontent'
import axios from 'axios';

const ArticlePage = () =>{
    const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]})
    
    useEffect(() =>{
        const loadArticleInfo = async () =>{
        const response= await axios.get(`/api/articles/${articleId}`)
        const newArticleInfo = response.data
        setArticleInfo(newArticleInfo)
        }
        loadArticleInfo()
    },[])

    const { articleId } = useParams()
    const article= articles.find(article=>article.name===articleId)
    if (!article) return <NotFoundPage/>
    return (
    <>
        <h1>
            {article!.title}
        </h1>
        <p>
            This article has {articleInfo.upvotes} upvote(s)
        </p>
        {article!.content.map(p=><p>{p}</p>)}
    </>
    )
}

export default ArticlePage