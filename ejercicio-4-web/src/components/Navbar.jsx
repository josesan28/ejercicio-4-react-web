import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand">
          {title}
        </Link>

        <div className="site-nav__links">
          <Link to="/" className="site-nav__link">
            Inicio
          </Link>
          <Link to="/teams" className="site-nav__link site-nav__link--primary">
            Equipos
          </Link>
        </div>
      </div>
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