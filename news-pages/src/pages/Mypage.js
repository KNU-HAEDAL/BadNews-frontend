import Sidebar from '../components/Sidebar';
import MypageResult from '../components/Contents/MypageResult';
import { Link } from 'react-router-dom';

const header_height = '101px';

const Mypage = () => {
    return (
        <div className="Mypage" 
            style={{display: 'flex', height: `calc(100% - ${header_height})`}}
        >
            <Sidebar />
            <MypageResult />
        </div>
    );
};

export default Mypage;
