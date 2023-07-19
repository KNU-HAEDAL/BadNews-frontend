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
        justifyContent: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const appStyle = {
        display: 'flex',
        flexDirection: 'column',
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
            <div style={headerStyle}>
                <TitleName />
                <NewsSearch />
                <Mypage />
                <span style={HorizonLine}></span>
            </div>
            <div style={{ flex: 1 }}>
                <FieldList />
            </div>
            <div style={{ flex: 1 }}>
                <NewsPages />
            </div>

            <PageNumbers />
        </div>
    );
}

export default App;
