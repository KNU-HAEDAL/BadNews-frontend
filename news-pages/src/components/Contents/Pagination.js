import React, { useState } from 'react';
// import styled from 'styled-components';
import './Pagination.css';

const Pagination = ({ total, limit, page, setPage }) => {
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
}

export default Pagination;
