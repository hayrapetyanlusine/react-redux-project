import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { BasketReducer, initialNav } from "../features/Navbar/NavSlice";

const middl1 = (store) => (next) => (action) => {
    console.log(action)
    return next(action);
}

const store = legacy_createStore(combineReducers({
    nav: BasketReducer
}), {
    nav: initialNav
}, applyMiddleware(middl1));

export default store;