import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="MainPages">
            <form>
                <Header />
                <Sidebar />
                <CategoriesResult />
            </form>
        </div>
      );
}

export default MainPage;