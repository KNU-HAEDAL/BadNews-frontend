import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesResult.css";
import Article from "./Article";
import Pagination from "./Pagination";
import axios from "axios";

const CategoriesResult = (props) => {
  const navigate = useNavigate();

  // 뉴스 데이터 가공 -> article로 저장
  // const [article, setArticle] = useState(
  //     props.news.state.data.map((article) => ({
  //     ...article, isMarked: false,
  //     }))
  // );
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loading state

  // 북마크 상태 변경하여 article 상태 저장
  const handleBookmarkClick = (clickedArticle, index) => {
    console.log("bookmark CategoriesResults 클릭");
    console.log(article[0].image.id);
    const imageId = article[index].image.id;
    console.log(imageId);
    axios
      .get(`http://13.125.37.219:8080/article/scrap/update?id=${imageId}`)
      // .get(`http://13.125.37.219:8080/article/scrap/update`, imageId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setArticle((prevArticles) =>
      prevArticles.map((article) =>
        article === clickedArticle
          ? { ...article, isMarked: !article.isMarked }
          : article
      )
    );
  };

  // 홈에 기사 렌더링 - 서버 호출하여 값 리턴
  // 컴포넌트 마운트 시
  useEffect(() => {
    if (isLoading) {
      const data = {
        userId: "1234",
        category: "default",
        sort: 1,
      };

      axios
        .post("http://13.125.37.219:8080/article/home", data)
        .then(function (response) {
          console.log("home:" + response.data);
          setArticle(
            response.data.map((article) => ({
              ...article,
              isMarked: false,
            }))
          );

          setIsLoading(false); // after data fetching
        })
        .catch(function (error) {
          console.log("failed to return articles to home:", error);
        });
    }
  }, []);

  if (isLoading) {
    return <p className="loading-state">Loading data...</p>; // Render loading indicator while fetching data
  }

  return (
    <div className="CategoriesResult">
      <div className="contents">
        <div className="today-text-container">
          <strong className="today-text">오늘의 추천 기사</strong>
        </div>

        {article.map((article, index) => (
          // {articles.slice(0, 5).map((article, index) => (
          <Article
            key={index}
            article={article}
            handleBookmarkClick={() => handleBookmarkClick(article, index)} // 기사와 인덱스 모두 전달
          />
        ))}
      </div>

      <div className="page-numbers">
        <Pagination />
      </div>
    </div>
  );
};

export default CategoriesResult;
