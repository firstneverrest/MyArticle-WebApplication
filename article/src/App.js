import React, { useState, useEffect} from 'react'
import Loading from './components/Loading';
import Error from './components/Error'
import Articles from './components/Articles';
import Article from './components/Article';

// medium api - 
const url = 'https://v1.nocodeapi.com/neverrest/medium/tbUXiyQhVDDssczC';

function App() {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  
  // fetch api
  useEffect(() => {
    fetchArticles()
  }, [])

  // fetch articles from Medium using nocodeapi
  const fetchArticles = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setLoading(false)
      setArticles(articles)
    } catch (error) {
      setLoading(false)
      return (
        <Error />
      );
    }
  }

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.id != id)
    setArticles(newArticles)
  }

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <main>
      <Articles articles={articles} removeArticle={removeArticle} />
    </main>
  );
}

export default App;
