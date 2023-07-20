import './App.css';
import Login from './pages/Login';
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
            <Login />
        </div>
    );
}

export default App;
