import React from 'react'
import Article from './Article'

const Articles = ({articles, removeArticle}) => {

    return (
        <div className="Articles">
            <h2 className="Articles__header">My Article</h2>
            <p className="Articles__description">These all articles are come from my medium article.
                If you enjoy with my articles, please visit  
                <a href="https://medium.com/neverrest"> my medium</a></p> 
            <div className="Articles__container">
            {articles.map((article, index) => {
                return <Article key={index} 
                                article={article}
                                removeArticle={removeArticle} />;
            })}
            </div>
        </div>
    )
}

export default Articles
