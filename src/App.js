import { useDispatch } from 'react-redux';
import './App.scss';
import { NavComp } from './features/Navbar/NavSlice';

function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='nav'>
        <NavComp />
      </div>
    </div>
  );
}

export default App;
