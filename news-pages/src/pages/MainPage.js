import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import SearchResult from '../components/Contents/SearchResult';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="MainPage" style={{ height: 'calc(100% - 101px)'}}>
            <Sidebar />

            <Routes>
                <Route exact path="/" element={<CategoriesResult />} />
                <Route exact path="/search-result" element={<SearchResult />} />
            </Routes>
        </div>
    );
};

export default MainPage;
