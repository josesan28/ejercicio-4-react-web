import { useEffect, useState } from 'react';
import { getTeams } from '../api/sportsApi';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch(() => setError('Error al cargar los equipos'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando equipos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Equipos</h1>
      <ul>
        {teams.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default TeamList;