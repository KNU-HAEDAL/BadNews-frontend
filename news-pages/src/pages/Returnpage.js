import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ReturnArticles from "../components/Contents/ReturnArticles";
import CategoriesResult from "../components/Contents/CategoriesResult";


const header_height = "6rem";

const ReturnPage = (props) => {
    const [txtValue, setTxtValue] = useState([]);
    const location = useLocation(); // 현재 브라우저 경로 정보. useLocation 훅은 최상위 레벨에서 호출

    // txtValue에 현재 경로 정보 업데이트
    // location 업데이트 시마다 
    useEffect(() => {
        console.log(location);
        setTxtValue(location);
    }, [location]);

    return (
        <div
            className="ReturnPage"
            style={{ display: "flex", height: `calc(100vh - ${header_height})` }}
        >
            <Sidebar propFunction={txtValue} />
            {location.pathname === "/article/save" 
                ? ( <ReturnArticles news={location} /> ) 
                : ( <CategoriesResult news={location} /> ) 
                // `news` prop으로 location 객체를 CategoriesResult 컴포넌트로 전달 
                // -> 컴포넌트 내에서 props.news로 location에 접근
            }
        </div>
    );
};

export default ReturnPage;
