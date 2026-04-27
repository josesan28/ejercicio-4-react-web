import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFavorites } from '../context/FavoritesContext';

function TeamCard({ id, name, city, logo, conference }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(id);

  const handleFavorite = () => {
    favorited
      ? removeFavorite(id)
      : addFavorite({ id, name, city, logo, conference });
  };

  return (
    <article className="team-card">
      <img src={logo} alt={`Logo de ${name}`} width={64} height={64} />
      <h2>{name}</h2>
      <p>{city}</p>
      <p>{conference}</p>
      <div className="team-card__actions">
        <button onClick={handleFavorite}>
          {favorited ? '★ Quitar favorito' : '☆ Favorito'}
        </button>
        <Link className="team-card__link" to={`/teams/${id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

TeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  logo: PropTypes.string,
  conference: PropTypes.string,
};

TeamCard.defaultProps = {
  logo: '',
  conference: 'Sin conferencia',
};

export default TeamCard;