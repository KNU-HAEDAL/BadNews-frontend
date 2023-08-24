import Sidebar from '../components/Sidebar';
import CategoriesResult from '../components/Contents/CategoriesResult';
import { Link } from 'react-router-dom';

const header_height = '101px';

const Mypage = () => {
    return (
        <div 
            className="MyPage" 
            style={{display: 'flex', height: `calc(100% - ${header_height})`}}>
            <Sidebar />

            <CategoriesResult />
        </div>
    );
};

export default Mypage;
