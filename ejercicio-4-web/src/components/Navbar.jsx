import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav>
      <Link to="/">{title}</Link>
      <Link to="/teams">Equipos</Link>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'NFL',
};

export default Navbar;