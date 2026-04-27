import { useEffect, useState } from 'react';
import { getTeams } from '../api/sportsApi';
import TeamCard from '../components/TeamCard';
import SearchBar from '../components/SearchBar';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch(() => setError('Error al cargar los equipos'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = teams.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Cargando equipos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="page">
      <h1>Equipos NFL</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Buscar equipo..." />
      <div className="team-grid">
        {filtered.map((item) => (
          <TeamCard
            key={item.id}
            id={item.id}
            name={item.name}
            city={item.city}
            logo={item.logo}
            conference={item.conference}
          />
        ))}
      </div>
      {filtered.length === 0 && <p>No se encontraron equipos con ese criterio.</p>}
    </main>
  );
}

export default TeamList;