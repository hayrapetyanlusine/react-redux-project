import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { FooterComp } from './features/Footer/FooterSlice';
import { Main } from './features/Main/Main';
import { NavComp } from './features/Navbar/NavSlice';
import { chengeSlide, next, prev, selectSlide, Slider } from './features/Slider/Slider';

function App() {
  const slide =  useSelector(selectSlide);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='nav'> <NavComp /> </div>
      <Slider slide={slide} 
        change={(val) => {dispatch(chengeSlide(val))}} 
        next={(nextSlide) => {dispatch(next(nextSlide))}} 
        prev={(prevSlide) => dispatch(prev(prevSlide))}
      />
      <div className='main'>
        <Main/>
      </div>
      <div className='footer'> <FooterComp/> </div>
    </div>
  );
}

export default App;
