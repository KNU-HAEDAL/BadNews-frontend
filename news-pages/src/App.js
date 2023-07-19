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

    const HorizonLine = {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid #aaa',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
    };

    return (
        <div className="App">
            <div>
                <TitleName />
                <NewsSearch />
                <Mypage />
                <span style={HorizonLine}></span>
            </div>

            <FieldList />
            <NewsPages />
            <PageNumbers />
        </div>
    );
}

export default App;
