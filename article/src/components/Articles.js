import React from 'react'
import Article from './Article'

const Articles = ({articles, removeArticle}) => {

    console.log(articles[1]["content:encoded"]);
    
    return (
        <div className="Articles">
            <h2 className="Articles__header">My Article</h2>
            <p className="Articles__description">These all articles are come from my medium article.
                If you enjoy with my articles, please visit  
                <a href="https://medium.com/neverrest"> my medium</a></p> 
            {articles.map((article, index) => {
                // return <Article key={index} 
                //                 thumbnail={article.encode}
                //                 title={article.title} 
                //                 link={article.link}
                //                 pubDate={article.pubDate}
                //                 categories={article.categories}
                //                 removeArticle={removeArticle} />;
                return <Article key={index} 
                                {...article}
                                removeArticle={removeArticle} />;
            })}
        </div>
    )
}

export default Articles
