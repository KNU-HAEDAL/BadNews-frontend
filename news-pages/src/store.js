import { Provider, useSelector, useDispatch } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducer';

const loginSlice = createSlice({
    name:'loginSlice', 
    initialState:{isLoggedIn: false, isLoggingIn: false}, 
    reducers:{
        up:(state, action)=>{
            state.value += action.payload;
        }
    }
})

const store = configureStore({
    reducer:{
        counter: loginSlice.reducer
    }
});

function Counter(){
    const dispatch = useDispatch();
    const count = useSelector(state => {
        return state.counter.value;
    })

    return (
        <div>
            <button onClick={loginSlice.actions.up(2)}> + </button> {count}
        </div>
    );
}

export default store;
