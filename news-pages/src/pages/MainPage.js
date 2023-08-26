import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

const header_height = '6rem';

const MainPage = () => {
    return (
        <div className="MainPage"
            style={{ display: 'flex', height: `calc(100vh - ${header_height})` }}
        >
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<CategoriesResult />} />
            </Routes>
        </div>
    );
};

export default MainPage;
