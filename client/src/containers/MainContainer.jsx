import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllTeams, postTeam, putTeam, deleteTeam } from '../services/teams';
import { getAllPlayers } from '../services/players';
import Players from '../screens/Players';
import Teams from '../screens/Teams';
import TeamCreate from '../screens/TeamCreate';
import TeamEdit from '../screens/TeamEdit';
import TeamDetail from '../screens/TeamDetail';

export default function MainContainer(props) {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchTeams = async () => {
      const teamList = await getAllTeams();
      setTeams(teamList);
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playerList = await getAllPlayers();
      setPlayers(playerList);
    };
    fetchPlayers();
  }, []);

  const handleCreate = async (formData) => {
    const teamData = await postTeam(formData);
    setTeams((prevState) => [...prevState, teamData]);
    history.push('/teams');
  };

  const handleUpdate = async (id, formData) => {
    const teamData = await putTeam(id, formData);
    setTeams((prevState) =>
      prevState.map((team) => {
        return team.id === Number(id) ? teamData : team;
      })
    );
    history.push('/teams');
  };

  const handleDelete = async (id) => {
    await deleteTeam(id);
    setTeams((prevState) => prevState.filter((team) => team.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path='/players'>
          <Players players={players} />
        </Route>
        <Route path='/teams/:id/edit'>
          <TeamEdit teams={teams} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/teams/new'>
          <TeamCreate handleCreate={handleCreate} />
        </Route>
        <Route path='/teams/:id'>
          <TeamDetail players={players} />
        </Route>
        <Route path='/teams'>
          <Teams
            teams={teams}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}