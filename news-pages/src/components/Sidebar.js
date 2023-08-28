import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import category from "../category.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [click, setClick] = useState(false);

  const navigateToPolitics = (article) => {
    navigate("/article/returnpage", {
      state: { data: article },
    });
  };

  const handleCategoryClick = async (choosedCtgr) => {
    setClick(!click);
    setSelectedCategory(choosedCtgr); // 선택한 카테고리 업데이트
  };
  useEffect(() => {
    if (selectedCategory) {
      const idValue = "1234";
      const data = {
        userId: idValue,
        category: selectedCategory,
        sort: 1,
      };

      axios
        .post("http://13.125.37.219:8080/article/save", data)
        .then(function (response) {
          console.log("click:" + response.data);
          navigateToPolitics(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [click]);

  return (
    <div className="Sidebar">
      <div className="categories-container">
        <div id="categories-title">
          <img src={category} alt="categories icon" id="categories-icon" />
          <strong>카테고리</strong>
        </div>

        <div id="categories-list">
          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("정치")}
          >정치</button>

          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("경제")}
          >경제</button>

          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("사회")}
          >사회</button>

          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("IT/과학")}
          >IT | 과학</button>

          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("생활/문화")}
          >생활 | 문화</button>

          <button
            className="categories-btn"
            onClick={() => handleCategoryClick("스포츠")}
          >스포츠</button>
        </div>
      </div>
    </div>
  );
}
