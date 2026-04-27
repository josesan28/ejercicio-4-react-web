import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TeamCard({ id, name, city, logo, conference }) {
  return (
    <article>
      <img src={logo} alt={`Logo de ${name}`} width={64} height={64} />
      <h2>{name}</h2>
      <p>{city}</p>
      <p>{conference}</p>
      <Link to={`/teams/${id}`}>Ver detalle</Link>
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