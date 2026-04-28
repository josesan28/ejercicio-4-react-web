const BASE_URL = 'https://v1.american-football.api-sports.io';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getTeams = async (league = 1, season = 2024) => {
  const res = await fetch(`${BASE_URL}/teams?league=${league}&season=${season}`, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'v1.american-football.api-sports.io',
    },
  });
  const data = await res.json();
  return data.response.slice(0, 32);
};

export const getTeamById = async (id) => {
  const res = await fetch(`${BASE_URL}/teams?id=${id}`, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'v1.american-football.api-sports.io',
    },
  });
  const data = await res.json();
  return data.response[0];
};