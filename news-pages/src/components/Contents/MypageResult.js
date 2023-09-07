import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CategoriesResult.css";
import Pagination from "./Pagination";
import unmarked from "../../bookmark_unmarked.png";
import marked from "../../bookmark_marked.png";
import axios from "axios";

const CategoriesResult = () => {
  const [isMarked, setIsMarked] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "기사 1",
      date: "2023-08-25",
      summary: "룰루........즐겁다",
    },
    {
      id: 2,
      title: "기사 2",
      date: "2023-08-26",
      summary: "룰룰........즐겁다",
    },
  ]);

  const handleBookmarkClick1 = () => {
    var image = document.getElementById("bookmark");
    image.src = { marked };
  };

  const userId = useSelector((state) => state.counter.userId);

  // 데이터를 기반으로 리스트 아이템 렌더링
  const articleItems = articles.map((article) => (
    <div className="article-container" key={article.id}>
      <div className="article-subcontainer1">
        <div className="title-bookmark-container">
          <strong className="article-title">{article.title}</strong>
          <div className="bookmark-container">
            <img
              src={marked}
              alt="unmarked"
              id="bookmark"
              onClick={() => handleBookmarkClick1(article.id)}
            />
          </div>
        </div>
        <div className="article-date">
          스포티비뉴스&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}
        </div>
        <div className="article-summary">{article.summary}</div>
      </div>
    </div>
  ));

  useEffect(() => {
    axios
      .post("http://13.125.37.219:8080/article/scrap", {
        userId,
      })
      .then((response) => {
        console.log("스크랩 데이터 확인용" + response);
        console.log("userId는" + userId);
        // setArticles(id, title, date, summary); 넣어야하는데 일단 백엔드 명세서 따라적음 id가 없는데
        // setArticles(
        //   response.data.id,
        //   response.data.title,
        //   response.data.date,
        //   response.data.context
        // );
      })
      .catch((error) => {
        console.error(error);
      });

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // 각 entry에 대한 처리 로직 작성
        if (entry.isIntersecting) {
          console.log("Form element is intersecting!");
          // 관찰되었을 때 실행할 동작 추가
        }
      });
    };

    const observerOptions = {
      root: document.querySelector(".ScrollableSection"), // 스크롤바를 적용할 부모 요소 선택
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const formsToObserve = document.querySelectorAll(".ScrollableSection form");

    formsToObserve.forEach((form) => {
      observer.observe(form);
    });

    return () => {
      formsToObserve.forEach((form) => {
        observer.unobserve(form);
      });

      // Observer 해제 로직 추가 (컴포넌트 언마운트 시)
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  return (
    <div className="CategoriesResult">
      <div className="contents">
        {/* 상단 문구 */}
        <div className="today-text">
          <strong>내가 스크랩한 기사</strong>
          <div className="today-text-context">
            &nbsp;&nbsp;북마크로 관심 기사를 스크랩하고 관리해보세요
          </div>
        </div>

        {articleItems}
      </div>

      <div className="page-numbers">
        <Pagination />
      </div>
    </div>
  );
};

export default CategoriesResult;
