import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './showSummary.css';

const ShowSummary = () => {




  const { shows } = useSelector((state) => state.shows);
  const { id } = useParams();


  console.log(id);

  const currentShow = shows.find((show) => {
    return show.show.id == id;
  });


  console.log(currentShow);

  return (
    <div className='shows__summary-container content-margin' >
      <div className="shows__summary-container-left">
        <img className='show__img' src={currentShow.show.image.original} alt="" />
      </div>\

      <div className="shows__summary-container-right">
        <p><span className='bold-text'>Name:</span> {currentShow.show.name}</p>
        <p><span className='bold-text'>Info:</span> {currentShow.show.summary}</p>
        <p><span className='bold-text'>Premiered:</span> {currentShow.show.premiered}</p>
        <p><span className='bold-text'>Genre:</span> {currentShow.show.genres.join(', ')}</p>
        <p><span className='bold-text'>Runtime:</span> {currentShow.show.runtime}</p>
        <p><span className='bold-text'>Rating:</span> {currentShow.show.rating.average}</p>
        <button>Book Ticket</button>
      </div>


    </div>
  );
};

export default ShowSummary;