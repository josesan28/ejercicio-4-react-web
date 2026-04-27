import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getTeams } from '../api/sportsApi';
import { useFavorites } from '../context/FavoritesContext';

function Home() {
  const [teams, setTeams] = useState([]);
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);

  const goToRandom = () => {
    if (teams.length === 0) return;
    const random = teams[Math.floor(Math.random() * teams.length)];
    navigate(`/teams/${random.id}`);
  };

  return (
    <main className="page">
      <h1>NFL Teams</h1>
      <p className="home__subtitle">Conoce todos los equipos de la NFL</p>

      <div className="home__actions">
        <button onClick={goToRandom}>Equipo aleatorio</button>
        <Link to="/teams" className="link-button">
          Ver todos los equipos
        </Link>
      </div>

      {favorites.length > 0 && (
        <section className="favorites">
          <h2>Tus favoritos</h2>
          <ul>
            {favorites.map((team) => (
              <li key={team.id}>
                <Link to={`/teams/${team.id}`}>{team.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default Home;