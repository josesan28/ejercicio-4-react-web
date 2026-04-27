import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamById } from '../api/sportsApi';

function TeamDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTeamById(id)
      .then(setTeam)
      .catch(() => setError('Error al cargar el equipo'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!team) return <p>Equipo no encontrado</p>;

  return (
    <main>
      <h1>{team.name}</h1>
      <p>{team.city}</p>
    </main>
  );
}

export default TeamDetail;