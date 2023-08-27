import React, { useEffect, useState } from "react";
import "../../components/Contents/CategoriesResult.css";
import Article from './Article';
import Pagination from "./Pagination";


const ReturnArticles = (props) => {
  const [articles, setArticles] = useState(
    props.news.state.data.map((article) => ({
      ...article, isMarked: false,
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

  useEffect(() => {
    // Update articles whenever props.news.state.data changes
    setArticles(
      props.news.state.data.map((article) => ({
        ...article, isMarked: false,
      }))
    );
  }, [props.news.state.data]); // Add props.news.state.data as a dependency

  console.log("값이 도착했습니다.");
  console.log(props);
  
  return (
    <div className="CategoriesResult">
      <div className="contents">
        <div className="today-text-container">
          <div className="today-text" style={{ fontSize: '1.2rem' }}>
            <strong>'{props.news.state.data[0].category}'&nbsp;</strong>
            {props.news.state.data[0].category === "스포츠" ? 
              ("최신 기사") : 
              ("추천 기사")
            }
          </div>
        </div>
        
        {articles.map((article, index) => (
        // {articles.slice(0, 5).map((article, index) => (
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
