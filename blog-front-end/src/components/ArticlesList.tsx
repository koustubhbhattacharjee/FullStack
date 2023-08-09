import { Link } from 'react-router-dom'

type Article = {
    name: string;
    title: string;
    content: string[];
};

type ArticlesListProps = {
    articles: Article[];
};
//look articles is array Destructured because the props property of the parent may have many properties
//and articles is one of them. so {articles} is like props.articles
const ArticlesList:React.FC<ArticlesListProps> = ({articles})=>{
    return (
        <>
            {articles.map(item=>{
                return(
                    <div key={item.name}>
                        <h3>{item.title}</h3>
                        <p>{item.content[0]?.substring(0,150)}...</p>
                        <Link to={`/articles/${item.name}`}>
                            read more...
                        </Link>
                    </div>
            )})}
        </>
    )}

export default ArticlesList