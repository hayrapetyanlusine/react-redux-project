import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { FooterReducer, initialFooter } from "../features/Footer/FooterSlice";
import { BasketReducer, initialNav } from "../features/Navbar/NavSlice";

const middl1 = (store) => (next) => (action) => {
    console.log(action)
    return next(action);
}

const store = legacy_createStore(combineReducers({
    nav: BasketReducer,
    footer: FooterReducer
}), {
    nav: initialNav,
    footer: initialFooter
}, applyMiddleware(middl1));

export default store;