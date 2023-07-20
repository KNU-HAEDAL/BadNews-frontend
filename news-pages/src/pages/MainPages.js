import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';

const MainPages = () => {
    return (
        <div className="MainPages">
            <form>
                <Header />
                <Categories />
                <CategoriesResult />
            </form>
        </div>
      );
}

export default MainPages;