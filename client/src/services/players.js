import api from './api-config';

export const getAllPlayers = async () => {
  const res = await api.get('/players');
  return res.data;
}

export const addPlayerToTeam = async (teamId, playerId) => {
  const res = await api.get(`/teams/${teamId}/players/${playerId}`);
  return res.data;
}