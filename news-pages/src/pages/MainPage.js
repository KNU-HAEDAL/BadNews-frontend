import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const MainPage = () => {
    return (
        <div className="MainPage">
            <form>
                <Sidebar />
                <CategoriesResult />
            </form>
        </div>
    );
};

export default MainPage;
