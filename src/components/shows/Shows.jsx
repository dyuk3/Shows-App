// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getData } from '../../features/data/dataSlice';
import ShowCard from '../showCard/ShowCard';
import './shows.css';

const Shows = () => {

  const { shows, loading } = useSelector((state) => state.shows);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  console.log(shows);

  // const [allShows, setAllShows] = useState([]);
  // useEffect(() => {
  //   const getShows = async () => {
  //     try {
  //       const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
  //       const shows = await response.json();
  //       setAllShows(shows);
  //     } catch (error) {
  //       console.log('There was an error', error);
  //     }
  //   };

  //   getShows();
  // }, []);

  // console.log(allShows);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className='shows content-margin'>
      <div className='shows-container'>
        {shows.map((item, index) => (
          <ShowCard key={index} {...item} />
        ))}

        {/* {shows.map((item) => (
          <h2></h2>
        ))} */}
      </div>
    </div>
  );
};

export default Shows;