import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import SearchResult from '../components/Contents/SearchResult';
import { Route, Routes, Link, useMatch } from 'react-router-dom';

const MainPage = () => {
    let {match} = useMatch(); /* 현재 경로의 path */

    return (
        <div className="MainPage">
            <Sidebar />

            <Routes>
                <Route exact path={`${match}`} element={<CategoriesResult />} />
                <Route path={`${match}/search-result`} element={<SearchResult />} />
            </Routes>
        </div>
    );
};

export default MainPage;
