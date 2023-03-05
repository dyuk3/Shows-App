import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Summary from './pages/summary/Summary';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from './features/data/dataSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
