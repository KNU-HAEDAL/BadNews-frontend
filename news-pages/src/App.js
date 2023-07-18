import './App.css';
import FieldList from './components/header/FieldList';
import TitleName from './components/header/TitleName';
import NewsPages from './components/body/NewsPages';
import NewsSearch from './components/body/NewsSearch';
import Mypage from './components/header/Mypage';
import PageNumbers from './components/body/PageNumbers';

function App() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
        <div className="App">
            <div style={headerStyle}>
                <TitleName />
                <NewsSearch />
                <Mypage />
            </div>

            <FieldList />
            <NewsPages />
            <PageNumbers />
        </div>
    );
}

export default App;
