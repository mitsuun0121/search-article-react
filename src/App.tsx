import { useState } from "react";
import { ArticleList } from "./components/ArticleList";
import axios from "axios";

export const App = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  
  const searchArticles = () => {
    axios.get(`https://qiita.com/api/v2/items`, {
      params: {
        query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_QIITA_API_KEY}`,
      },
    })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
    setQuery("");
  };

  return (
    <div>
      <h1>Article Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="検索ワードを入力" />
      <button onClick={searchArticles}>検索</button>
      <ArticleList articles={articles} />
    </div>
  );
}
