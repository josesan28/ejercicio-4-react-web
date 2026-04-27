import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <Link to="/teams">← Volver</Link>
      <img src={team.logo} alt={`Logo de ${team.name}`} width={128} height={128} />
      <h1>{team.name}</h1>
      <p>{team.city}</p>
      <p>{team.conference}</p>
      <p>{team.division}</p>
    </main>
  );
}

export default TeamDetail;