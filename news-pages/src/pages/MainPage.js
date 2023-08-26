import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
// import Pagination from './Pagination';
import unmarked from '../bookmark_unmarked.png';
import marked from '../bookmark_marked.png';
import axios from 'axios';

const header_height = '6rem';

const HomeArticle = ({ article, handleBookmarkClick }) => {
    return (
        <div className="article-container">
            <div className="article-subcontainer1">
                <div className="title-bookmark-container">
                    <strong className="article-title">{article.title}</strong>
                    <div className="bookmark-container">
                        <img
                            src={article.isMarked ? marked : unmarked}
                            alt={article.isMarked ? 'marked' : 'unmarked'}
                            id="bookmark"
                            onClick={() => handleBookmarkClick(article)}
                        />
                    </div>
                </div>
                <div className="article-info">
                    {article.author}&nbsp;&nbsp;|&nbsp;&nbsp;{article.date}
                </div>
                <div className="article-url-container">
                    <Link to={article.url} target="_blank" className="article-url">
                        기사 원문
                    </Link>
                </div>
                <div className="article-keywords"> {article.keywords.map((item) => `#${item} `)} </div>
                <div className="article-summary">{article.context}</div>
            </div>
            {/* <div className="article-subcontainer2">
            </div> */}
        </div>
    );
};

const HomePageNumbers = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);
    const [currentPage, setCurrentPage] = useState(page);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        setCurrentPage(newPage);
    };

    return (
        <nav className="Pagination">
            <button
                className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        key={i + 1}
                        className={`page-button ${currentPage === i + 1 ? 'current' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                        aria-current={currentPage === i + 1 ? 'page' : null}
                    >
                        {i + 1}
                    </button>
                ))}

            <button
                className={`page-button ${currentPage === numPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            >
                &gt;
            </button>
        </nav>
    );
};
const showHomeArticles = (choosedCtgr) => {
    // 변수에 인풋값 저장
    // id 브라우저 내부 저장값으로 수정필요
    const idValue = '1234';
    const ctgrValue = choosedCtgr;
    const data = {
        userId: idValue,
        category: ctgrValue,
        sort: 1,
    };

    axios
        .post('http://13.124.161.27:8080/article/Home', {
            userId: idValue,
            category: ctgrValue,
            sort: 1,
        })
        .then(function (response) {
            console.log(response.data);
            // 서버에서 받아온 데이터는 response.data에 저장됩니다.
        })
        .catch(function (error) {
            console.log(error);
        });
};

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

const HomePagination = () => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <Layout>
            <footer>
                <HomePageNumbers total={posts.length} limit={limit} page={page} setPage={setPage} />
            </footer>
        </Layout>
    );
};

const MainPage = (props) => {
    const [articles, setArticles] = useState(
        props.news.state.data.map((article) => ({
            ...article,
            isMarked: false,
        }))
    );

    const handleBookmarkClick = (clickedArticle) => {
        setArticles((prevArticles) =>
            prevArticles.map((article) =>
                article === clickedArticle ? { ...article, isMarked: !article.isMarked } : article
            )
        );
    };

    console.log('props');
    console.log(props);

    return (
        <div className="CategoriesResult">
            <div className="contents">
                {/* 상단 문구 */}
                <div className="today-text" style={{ color: '#595959', fontSize: '1.1rem' }}>
                    <strong>'{props.news.state.data[0].category}'</strong>&nbsp;영역 추천 기사
                </div>

                {/* articles */}
                {articles.slice(0, 5).map((article, index) => (
                    <HomeArticle key={index} article={article} handleBookmarkClick={handleBookmarkClick} />
                ))}
            </div>

            {/* Pagination */}
            {/*<div className="page-numbers">
                  <HomePagination />
              </div>*/}
        </div>
    );
};

export default MainPage;

// export default function MainPage() {
//     return (
//         <div className="MainPage" style={{ display: 'flex', height: `calc(100vh - ${header_height})` }}>
//             <Sidebar />
//             <Routes>
//                 <Route exact path="/" element={<CategoriesResult />} />
//             </Routes>
//         </div>
//     );
// }
