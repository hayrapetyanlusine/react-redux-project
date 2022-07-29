import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { FooterComp } from './features/Footer/FooterSlice';
import { Blogs } from './features/Navbar/Blogs/Blogs';
import { Contact } from './features/Navbar/Contact/Contact';
import { History } from './features/Navbar/History/History';
import Home from './features/Navbar/Home';
import { NavComp } from './features/Navbar/NavSlice';
import { allChock, allNoSugar, darkChock, milkChock, Product, stateProducts } from './features/Navbar/Product/Product';
import { next, selectSlide, Slider } from './features/Slider/Slider';

function App() {
  const slide =  useSelector(selectSlide);
  const products = useSelector(stateProducts);
  const wrapperRef = useRef("");
  const basketProductRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        dispatch(next(wrapperRef));
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    } catch (err) {}
  }, [<Slider/>]);

  return (
    <div className="App">
      <div className='nav'> <NavComp productRef={basketProductRef}/> </div>

      <Routes>
        <Route exact path="/home" element={<Home slide={slide} wrapperRef={wrapperRef} dispatch={dispatch}/>}></Route>
        <Route path="/product" element={<Product products={products}
          all={() => dispatch(allChock())}
          allDark={() => dispatch(darkChock())}
          allMilk={() => dispatch(milkChock())}
          allNoSugar={() => dispatch(allNoSugar())}
        />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <div className='footer'> <FooterComp/> </div>
    </div>
  );
}

export default App;
