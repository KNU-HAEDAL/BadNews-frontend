import React, { useEffect, useState } from "react";
import "../../components/Contents/CategoriesResult.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import unmarked from "../../bookmark_unmarked.png";
import marked from "../../bookmark_marked.png";

const Article = ({ article, handleBookmarkClick }) => {
  // 컨테이너 높이 동적으로 조정
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const subcontainer1 = document.querySelector(".article-subcontainer-1");
    const subcontainer1Height = subcontainer1.offsetHeight;
    setContainerHeight(subcontainer1Height);
  }, []);

  return (
    <div className="article-container">
      <div className="article-subcontainer-1">
        <div className="title-bookmark-container">
          <strong className="article-title">
            <Link to={article.url} target="_blank">{article.title}</Link>
          </strong>
          <div className="bookmark-container">
            <img
              src={article.isMarked ? marked : unmarked}
              alt={article.isMarked ? "marked" : "unmarked"}
              id="bookmark"
              onClick={() => handleBookmarkClick(article)}
            />
          </div>
        </div>
        <div className="article-info">{article.author}&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}</div>
        <div className="article-url-container">
          <Link to={article.url} target="_blank" className="article-url">기사 원문</Link>
        </div>
        <div className="article-keywords">{article.keywords.map((item) => `#${item} `)}</div>
        <div className="article-summary">{article.context}</div>
      </div>

      <div className="article-img-container" >
        <img src={article.image.path} alt="기사 이미지" style={{ height: containerHeight }}/>
      </div>
    </div>
  );
};

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

  useEffect(() => {
    // Update articles whenever props.news.state.data changes
    setArticles(
      props.news.state.data.map((article) => ({
        ...article,
        isMarked: false,
      }))
    );
  }, [props.news.state.data]); // Add props.news.state.data as a dependency

  console.log("값이 도착했습니다.");
  console.log(props);

  return (
    <div className="CategoriesResult">
      <div className="contents">
        <div className="today-text" style={{ fontSize:'1.3rem' }}>
          <strong>'{props.news.state.data[0].category}'&nbsp;</strong>
          {props.news.state.data[0].category === "스포츠" ? 
            ("최신 기사") : 
            ("추천 기사")
          }

          {/* <strong>'{props.news.state.data[0].category}'</strong>&nbsp;추천 기사 */}
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
