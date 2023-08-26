const SET_LOGIN = "counter/SET_LOGIN";
const SET_LOGOUT = "counter/SET_LOGOUT";

export const setLogin = () => ({ type: SET_LOGIN });
export const setLogout = () => ({ type: SET_LOGOUT });

const initialState = {
  logined: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        logined: 1,
      };
    case SET_LOGOUT:
      return {
        ...state,
        logined: 0,
      };
    default:
      return state;
  }
}
