import React, { useEffect, useState } from "react";
import './CategoriesResult.css';
import Article from './Article';
import Pagination from './Pagination';


const ReturnArticles = (props) => {
  // 뉴스 데이터 가공 -> article로 저장
  const [article, setArticle] = useState(
    props.news.state.data.map((article) => ({
      ...article, isMarked: false,
    }))
  );
  
  // 북마크 상태 변경하여 article 상태 저장
  const handleBookmarkClick = (clickedArticle) => {
    setArticle((prevArticles) =>
      prevArticles.map((article) =>
        article === clickedArticle
          ? { ...article, isMarked: !article.isMarked }
          : article
      )
    );
  };

  // props.news.state.data(서버에서 받아온 데이터)가 변경될 때마다 
  useEffect(() => {
    // article 상태 저장
    setArticle(
      props.news.state.data.map((article) => ({
        ...article, isMarked: false,
      }))
    );
  }, [props.news.state.data]); 

  console.log("값이 도착했습니다.");
  console.log(props);
  

  return (
    <div className="CategoriesResult">
      <div className="contents">
        <div className="today-text-container">
          <div className="today-text" style={{ fontSize: '1.2rem' }}>
            <strong>'{article[0].category}'&nbsp;</strong>
            {article[0].category === "스포츠" 
              ? ("최신 기사") 
              : ("추천 기사")
            }
          </div>
        </div>
        
        {article.map((article, index) => (
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
