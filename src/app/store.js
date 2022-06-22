import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { FooterReducer, initialFooter } from "../features/Footer/FooterSlice";
import { BasketReducer, initialNav } from "../features/Navbar/NavSlice";
import { initialSlider, sliderReducer } from "../features/Slider/Slider";

const middl1 = (store) => (next) => (action) => {
    console.log(action)
    return next(action);
}

const store = legacy_createStore(combineReducers({
    nav: BasketReducer,
    slider: sliderReducer,
    footer: FooterReducer
}), {
    nav: initialNav,
    slider: initialSlider,
    footer: initialFooter
}, applyMiddleware(middl1));

export default store;