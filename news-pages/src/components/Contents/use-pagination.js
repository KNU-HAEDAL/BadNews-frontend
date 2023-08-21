import { useState } from 'react';

function makePagination(listCnt, pageRange, thisPage) {
    const lastPage = parseInt((listCnt - 1) / pageRange) + 1;
    const startRange = pageRange * parseInt((thisPage - 1) / pageRange) + 1;
    const endRange = startRange + pageRange - 1 < lastPage ? startRange + pageRange - 1 : lastPage;
    const startIdx = (thisPage - 1) * pageRange;
    const lastIdx = startIdx + pageRange - 1;
    const showStartBtn = pageRange < thisPage;
    const showEndBtn = endRange !== lastPage;
    const pageNotFound = thisPage <= 0 || thisPage > lastPage;
    return {
        startRange,
        endRange,
        lastPage,
        startIdx,
        lastIdx,
        showStartBtn,
        showEndBtn,
        pageNotFound,
    };
}

function usePagination(PageCnt, pageRange, thisPage) {
    const { startRange, endRange, lastPage, startIdx, lastIdx, showStartBtn, showEndBtn, pageNotFound } =
        makePagination(PageCnt, pageRange, thisPage);
    const [page, setPage] = useState(thisPage);
    const goStart = () => {
        setPage(1);
    };
    const goPrev = () => {
        setPage((prev) => prev - 1);
    };
    const goNext = () => {
        setPage((prev) => prev + 1);
    };
    const goEnd = () => {
        setPage(lastPage);
    };
    return {
        thisPage: page,
        setThisPage: setPage,
        goStart,
        goPrev,
        goNext,
        goEnd,
        startRange,
        endRange,
        lastPage,
        startIdx,
        lastIdx,
        showStartBtn,
        showEndBtn,
        pageNotFound,
    };
}

export default usePagination;
