import Sidebar from '../components/Sidebar';
import CategoriesResult from './components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';

const Mypage = () => {
    return (
        <div className="Mypage">
            <form>
                <Sidebar />
                <CategoriesResult />
            </form>
        </div>
    );
};

export default Mypage;
