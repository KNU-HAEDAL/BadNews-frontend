import React, { useState } from "react";
import "../../components/Contents/CategoriesResult.css";
import Pagination from "./Pagination";
import { useLocation, useNavigate, Route } from "react-router-dom";
import unmarked from "../../bookmark_unmarked.png";
import marked from "../../bookmark_marked.png";

function Article({ article, handleBookmarkClick }) {
  return (
    <div className="article-container">
      <div
        className="bookmark-container"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <img
          src={article.isMarked ? marked : unmarked}
          alt={article.isMarked ? "marked" : "unmarked"}
          onClick={() => handleBookmarkClick(article)}
        />
      </div>
      <strong className="article-title">{article.title}</strong>
      <div className="article-date">{article.date}</div>
      <div className="article-summary">{article.context}</div>
    </div>
  );
}

const ReturnArticles = (props) => {
  const [articles, setArticles] = useState(
    props.news.state.data.map((article) => ({
      ...article,
      isMarked: false,
    }))
  );

  const handleBookmarkClick = (clickedArticle) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article === clickedArticle
          ? { ...article, isMarked: !article.isMarked }
          : article
      )
    );
  };

  console.log("props");
  console.log(props);

  return (
    <div className="CategoriesResult">
      <div className="contents">
        <div className="today-text">
          <strong>'{props.news.state.data[0].category}'</strong>&nbsp;카테고리
          검색 결과
        </div>

        {articles.slice(0, 5).map((article, index) => (
          <Article
            key={index}
            article={article}
            handleBookmarkClick={handleBookmarkClick}
          />
        ))}
      </div>

      <div className="page-numbers">
        <Pagination />
      </div>
    </div>
  );
};

export default ReturnArticles;
