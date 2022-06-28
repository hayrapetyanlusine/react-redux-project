import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { FooterComp } from './features/Footer/FooterSlice';
import { Blogs } from './features/Navbar/Blogs';
import { Contact } from './features/Navbar/Contact/Contact';
import { History } from './features/Navbar/History/History';
import Home from './features/Navbar/Home';
import { NavComp } from './features/Navbar/NavSlice';
import { Product } from './features/Navbar/Product/Product';
import { selectSlide } from './features/Slider/Slider';

function App() {
  const slide =  useSelector(selectSlide);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='nav'> <NavComp /> </div>

      <Routes>
        <Route path="/home" element={<Home slide={slide} dispatch={dispatch}/>}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <div className='footer'> <FooterComp/> </div>
    </div>
  );
}

export default App;
