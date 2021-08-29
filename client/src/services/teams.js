import api from './api-config';

export const getAllTeams = async () => {
  const res = await api.get('/teams');
  return res.data;
};

export const getOneTeam = async (id) => {
  const res = await api.get(`/teams/${id}`);
  return res.data;
};

export const postTeam = async (teamData) => {
  const res = await api.post('/teams', { team: teamData });
  return res.data;
};

export const putTeam = async (id, teamData) => {
  const res = await api.put(`/teams/${id}`, { team: teamData });
  return res.data;
};

export const deleteTeam = async (id) => {
  const res = await api.delete(`/teams/${id}`);
  return res;
};