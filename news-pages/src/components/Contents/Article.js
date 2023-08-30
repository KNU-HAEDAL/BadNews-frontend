import React, { useEffect, useState } from "react";
import "../../components/Contents/CategoriesResult.css";
import unmarked from "../../bookmark_unmarked.png";
import marked from "../../bookmark_marked.png";
import { Link } from "react-router-dom";


const Article = ({ article, handleBookmarkClick }) => {
  // 컨테이너 높이 동적으로 조정
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const subcontainer1 = document.querySelector(".article-subcontainer-1");
    const subcontainer1Height = subcontainer1.offsetHeight;
    setContainerHeight(subcontainer1Height);
  }, []);

  // 날짜를 원하는 형식으로 포맷팅
  const formattedDate = article.date.replace('T', ' ');
  
  return (
    <div className="article-container">
      <div className="article-subcontainer-1">
        <div className="title-bookmark-container">
          <div>
            <Link to={article.url} target="_blank" id="article-title">{article.title}</Link>
          </div>
          <div className="bookmark-container">
            <img
              src={article.isMarked ? marked : unmarked}
              alt={article.isMarked ? "marked" : "unmarked"}
              id="bookmark"
              onClick={() => handleBookmarkClick(article)}
            />
          </div>
        </div>

        <div className="article-info">{article.author}&nbsp;&nbsp;|&nbsp;&nbsp;{formattedDate}</div>
        <div className="article-url-container">
          <Link to={article.url} target="_blank" className="article-url">기사 원문</Link>
        </div>
        <div className="article-keywords">{article.keywords.map((item) => `#${item} `)}</div>
        <div className="article-summary">{article.context}</div>
      </div>

      <div className="article-img-container">
        <img src={article.image.path} alt="기사 이미지" style={{ height: containerHeight }}/>
      </div>
    </div>
  );
};

export default Article;