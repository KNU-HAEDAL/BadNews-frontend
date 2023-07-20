import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    {
        /*const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const HorizonLine = {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid #aaa',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
    };*/
    }

    return (
        <browserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    
                </Switch>
                
            </div>
        </browserRouter>
    );
}

export default App;
