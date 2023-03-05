import './showCard.css';
import Movie from '../../resources/movie.jpg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const ShowCard = (props) => {

  return (

    <div className="shows__showCard-container">
      <Link to={`/${props.show.id}`}>
        <div className="shows__showCard-image">
          <img src={props.show.image !== null ? props.show.image.original : Movie} alt={props.show.name} />
        </div>
        <div className="shows__showCard-info">
          <h2>{props.show.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;