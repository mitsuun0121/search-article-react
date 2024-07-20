import React, { FC } from "react";
import "./ArticleList.css";

interface Article {
  id: string;
  title: string;
  body: string;
  url: string;
  created_at: string;
  user: {
    id: string;
    name: string;
    profile_image_url: string;
  };
  tags: Array<{
    name: string;
  }>;
  likes_count: number;
}

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { articles } = props;
  return (
    <div>
      {articles.map((article) => (
        <div className="article-card" key={article.id}>
          <div className="user-info">
            <img
              src={article.user.profile_image_url}
              alt={`${article.user.name}'s avatar`}
            />
            <div>
              <div className="username">
                @{article.user.id} ({article.user.name})
              </div>
              <div>{new Date(article.created_at).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="article-title">{article.title}</div>
          <div className="tags">
            {article.tags.map((tag) => (
              <div className="tag" key={tag.name}>
                {tag.name}
              </div>
            ))}
          </div>
          <div className="likes">
            <span>♥</span>
            <span>{article.likes_count}</span>
          </div>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            もっと読む
          </a>
        </div>
      ))}
    </div>
  );
};