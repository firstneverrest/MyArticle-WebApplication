import React from 'react'

// const Article = ({id, thumbnail, title, link, pubDate, categories, removeArticle}) => {
//     return (
//         <div className="Article">
//             <article className="Article__container">
//                 <main>
//                     <h4>{title}</h4>
//                     <h4>{thumbnail} Hello</h4>
//                     <h4>{link}</h4>
//                     <h4>{pubDate}</h4>
//                     <h4>{categories}</h4>
//                 </main>
//             </article>
//         </div>
//     )
// }
const Article = ({id, title, removeArticle}) => {
    return (
        <div className="Article">
            <article className="Article__container">
                <main>
                    <h4>{title}</h4>
                    {/* <h4>{content:encoded}</h4> */}
       
      
                    
                </main>
            </article>
        </div>
    )
}

export default Article
