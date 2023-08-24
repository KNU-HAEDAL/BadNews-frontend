import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Pagination from './Pagination';
import './Pagination.css';


const PageNumbers = ({ total, limit, page, setPage }) => {
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
                ))
            }

            <button
                className={`page-button ${currentPage === numPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === numPages}
            >
                &gt;
            </button>
        </nav>
    );
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;

const Pagination = () => {
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
                <PageNumbers total={posts.length} limit={limit} page={page} setPage={setPage} />
            </footer>
        </Layout>
    );
}

export default Pagination;
