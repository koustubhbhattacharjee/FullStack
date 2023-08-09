import React from 'react';
import ArticlesList  from "../components/ArticlesList"
import '../App.css'
import { Link } from 'react-router-dom'
import articles from './articlecontent';

const List = () =>{
    return (
        <ArticlesList articles={articles}/>
    )
}

export default List