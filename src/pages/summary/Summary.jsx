import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import ShowSummary from '../../components/showSummary/ShowSummary';
import { getData } from '../../features/data/dataSlice';

const Summary = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Navbar />
      <ShowSummary />
    </div>
  );
};

export default Summary;