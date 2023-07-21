import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import SearchResult from '../components/Contents/SearchResult';
import PageNumbers from '../components/Contents/PageNumbers';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

const MainPage = () => {
    // let location = useLocation(); /* 현재 경로의 path */

    return (
        <div className="MainPage">
            <Sidebar />

            <Routes>
                <Route exact path="/" element={<CategoriesResult />} />
                <Route exact path="/search-result" element={<SearchResult />} />
            </Routes>
            <PageNumbers />
        </div>
    );
};

export default MainPage;
