import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

const header_height = '101px';

const MainPage = () => {
    return (
        <div
            className="MainPage"
            style={{ display: 'flex', height: `calc(100% - ${header_height})` }}
        >
            <Sidebar />

            <Routes>
                <Route exact path="/" element={<CategoriesResult />} />
            </Routes>
        </div>
    );
};

export default MainPage;
